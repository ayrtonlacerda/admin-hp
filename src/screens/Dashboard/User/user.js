import React, { Component } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  ButtonAdd,
  TextForm,
  Input,
  ButtonIn
} from "./stylesuser";
import Modal from "react-modal";
import api from "../../../services/api";

import { List } from "../../../components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: 700,
    width: 400
  }
};

class Users extends Component {
  state = {
    arrayUser: [],
    createFormFlag: false,
    modalIsOpen: false,
    name: null,
    email: null,
    password: null,
    admin: false,
    prof: false,
    student: false
  };

  async componentWillMount() {
    let arraySchema = [];
    const itemToEdit = JSON.parse(localStorage.getItem("ItemToEdit"));
    console.log("ASYNC", itemToEdit);
    try {
      const response = await api.get("/user");
      console.log("response get\n", response.data.data);
      response.data.map(
        item =>
          (arraySchema = [
            ...arraySchema,
            {
              id: item.id,
              name: item.name,
              email: item.email,
              type: item.type,
              validity: item.validity,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt
            }
          ])
      );
      this.setState({ arrayUser: arraySchema });
    } catch (error) {
      console.log(error);
    }
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  handleInputIdCourse = e => {
    this.setState({ idCourse: e.target.value });
  };

  handleIdAccountable = e => {
    this.setState({ idAccountable: e.target.value });
  };

  handleInputDisciplineName = e => {
    this.setState({ disciplineName: e.target.value });
  };

  registerDiscipline = async () => {
    const { disciplineName, idCourse, idAccountable } = this.state;
    const token = localStorage.getItem("tokenUser");
    console.log(token);
    try {
      if (disciplineName !== null) {
        const response = await api.post(
          "/discipline",
          {
            name: disciplineName,
            course_id: idCourse,
            accountable: idAccountable
          },
          {
            headers: {
              authorization: token
            }
          }
        );
        console.log(response);
        this.closeModal();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      arrayUser,
      name,
      email,
      password,
      admin,
      prof,
      student
    } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.openModal}>CRIAR</ButtonAdd>
          <Title>Usuários</Title>
        </ContainerTitle>
        <List contentList={arrayUser} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <Title>Criar usuário</Title>
          <TextForm>Nome do usuário: </TextForm>
          <Input value={name} onChange={this.handleInputDisciplineName} />
          <TextForm>E-mail: </TextForm>
          <Input value={email} onChange={this.handleInputIdCourse} />

          <TextForm>Senha: </TextForm>
          <Input
            type="password"
            value={password}
            onChange={this.handleInputIdCourse}
          />

          <TextForm>Tipo de usuário : </TextForm>
          <div className="form-group">
            <select
              value={this.state.value}
              onChange={value => this.setState({ type: value })}
              className="form-control"
            >
              <option>Selecionar tipo</option>
              <option value={admin}>Administrador</option>
              <option value={prof}>Professor</option>
              <option value={student}>Aluno</option>
            </select>
          </div>
          {console.log(this.state)}
          <ButtonIn onClick={() => this.registerUser()}>
            CADASTRAR USUÁRIO
          </ButtonIn>
        </Modal>
      </Container>
    );
  }
}

export { Users };
