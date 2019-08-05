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
    const itemToEdit = JSON.parse(localStorage.getItem("ItemToEdit"));
    console.log("ASYNC", itemToEdit);
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

  handleInputAlfaNum = e => {
    this.setState({ alfanum: e.target.value });
  };

  handleInputIdDiscipline = e => {
    this.setState({ idDiscipline: e.target.value });
  };

  handleInputIdValidity = e => {
    this.setState({ validity: e.target.value });
  };

  registerClass = async () => {
    const { alfanum, validity, idDiscipline } = this.state;
    const token = localStorage.getItem("tokenUser");
    try {
      if (alfanum !== null) {
        const response = await api.post(
          "/class",
          {
            attribute: alfanum,
            validity: null,
            discipline_id: idDiscipline
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
    const { arrayclass, alfanum, validity, idDiscipline } = this.state;

    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={() => this.openModal()}>CRIAR</ButtonAdd>
          <Title>Turmas</Title>
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

          <ButtonIn onClick={() => this.registerClass()}>
            CADASTRAR CURSO
          </ButtonIn>
        </Modal>
      </Container>
    );
  }
}

export { Classes };
