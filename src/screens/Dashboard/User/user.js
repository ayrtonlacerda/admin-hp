import React, { Component, Picker } from "react";
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
import Select from "react-select";

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

const options = [
  { value: "admin", label: "Administrador" },
  { value: "student", label: "Aluno" },
  { value: "prof", label: "Professor" }
];

class Users extends Component {
  state = {
    arrayUser: [],
    createFormFlag: false,
    modalIsOpen: false,
    name: null,
    email: null,
    password: null,
    selectedOption: null,
    type: null,
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

  handleChange = selectedOption => {
    this.setState({ selectedOption, type: selectedOption.value });
  };

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

  handleInputPassword = e => {
    this.setState({ password: e.target.value });
  };

  handleInputUserEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleInputUserName = e => {
    this.setState({ name: e.target.value });
  };

  registerUser = async () => {
    const { name, email, password, type } = this.state;
    console.log("STATE", name, email, password, type);
    const token = localStorage.getItem("tokenUser");
    try {
      console.log("teste");
      const response = await api.post(
        "/user",
        {
          name: name,
          email: email,
          type: type,
          password_hash: password
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
      student,
      selectedOption
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
          <Input value={name} onChange={this.handleInputUserName} />
          <TextForm>E-mail: </TextForm>
          <Input value={email} onChange={this.handleInputUserEmail} />

          <TextForm>Senha: </TextForm>
          <Input
            type="password"
            value={password}
            onChange={this.handleInputPassword}
          />

          <TextForm>Tipo de usuário : </TextForm>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />

          <ButtonIn onClick={() => this.registerUser()}>
            CADASTRAR USUÁRIO
          </ButtonIn>
        </Modal>
      </Container>
    );
  }
}

export { Users };
