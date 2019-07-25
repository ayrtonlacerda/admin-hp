import React, { Component } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  ButtonAdd,
  TextForm,
  Input,
  ButtonIn
} from "./stylesclass";
import api from "../../../services/api";
import Modal from "react-modal";

import { List } from "../../../components";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: 500,
    width: 400
  }
};

class Classes extends Component {
  state = {
    arrayclass: [],
    modalIsOpen: false,
    alfanum: null,
    validity: null,
    idDiscipline: null
  };

  async componentWillMount() {
    let arraySchema = [];
    try {
      const response = await api.get("/class");
      console.log("response get\n", response);

      response.data.map(
        item =>
          (arraySchema = [
            ...arraySchema,
            {
              id: item.id,
              Codigo: item.code,
              Turma: item.attribute,
              Disciplina: item.disciplineInfo.name,
              "Id da disciplina": item.discipline_id,
              "Nome Discipina": item.disciplineInfo.name,
              "Id Responsavel": item.disciplineInfo.accountable
            }
          ])
      );

      console.log("arraySchema\n", arraySchema);
      this.setState({ arrayclass: arraySchema });
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

  render() {
    const { arrayclass, alfanum, validity, idDiscipline } = this.state;

    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={() => this.openModal()}>CRIAR</ButtonAdd>
          <Title>Cursos</Title>
        </ContainerTitle>
        <List contentList={arrayclass} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <Title>Criar Turma</Title>
          <TextForm>Código alfanumérico:</TextForm>
          <Input value={alfanum} onChange={this.handleInputAlfaNum} />

          <TextForm>ID da Disciplina </TextForm>
          <Input value={idDiscipline} onChange={this.handleInputIdDiscipline} />

          <TextForm>Validade </TextForm>
          <Input
            type="date"
            value={validity}
            onChange={this.handleInputIdValidity}
          />

          <ButtonIn onClick={() => this.registerCourse()}>
            CADASTRAR CURSO
          </ButtonIn>
        </Modal>
      </Container>
    );
  }
}

export { Classes };
