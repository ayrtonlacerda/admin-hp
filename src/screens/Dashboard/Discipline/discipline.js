import React, { Component } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  ButtonAdd,
  TextForm,
  Input,
  ButtonIn
} from "./stylesdiscipline";
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
    height: 600,
    width: 400
  }
};

class Discipline extends Component {
  state = {
    arrayDiscipline: [],
    createFormFlag: false,
    modalIsOpen: false,
    idCourse: null,
    idAccountable: null,
    disciplineName: null
  };

  async componentWillMount() {
    let arraySchema = [];
    const itemToEdit = JSON.parse(localStorage.getItem("ItemToEdit"));
    try {
      const response = await api.get("/discipline");

      response.data.map(
        item =>
          (arraySchema = [
            ...arraySchema,
            {
              Código: item.id,
              Disciplina: item.name,
              Início: item.start,
              Fim: item.finish,
              Curso: item.courseInfo.name,
              "Cód Curso": item.courseInfo.id,
              Responsável: item.accountableInfo.name,
              "Cód Resposável": item.accountableInfo.id
            }
          ])
      );

      this.setState({ arrayDiscipline: arraySchema });
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
        this.closeModal();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      arrayDiscipline,
      idAccountable,
      idCourse,
      disciplineName
    } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.openModal}>CRIAR</ButtonAdd>
          <Title>Disciplinas</Title>
        </ContainerTitle>
        <List contentList={arrayDiscipline} page="discipline" />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <Title>Criar disciplina</Title>
          <TextForm>Nome da disciplina:</TextForm>
          <Input
            value={disciplineName}
            onChange={this.handleInputDisciplineName}
          />
          <TextForm>ID do curso:</TextForm>
          <Input value={idCourse} onChange={this.handleInputIdCourse} />
          <TextForm>ID do responsável:</TextForm>
          <Input value={idAccountable} onChange={this.handleIdAccountable} />

          <ButtonIn onClick={() => this.registerDiscipline()}>
            CADASTRAR DISCIPLINA
          </ButtonIn>
        </Modal>
      </Container>
    );
  }
}

export { Discipline };
