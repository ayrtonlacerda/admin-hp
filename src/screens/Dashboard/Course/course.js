import React, { Component } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  ButtonAdd,
  TextForm,
  Input,
  ButtonIn
} from "./stylescourse";
import Modal from "react-modal";
import "./styles.css";
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
    height: 400,
    width: 400
  }
};

class Course extends Component {
  state = {
    arrayCourse: [],
    createFormFlag: false,
    modalIsOpen: false,
    enable: false,
    courseName: null
  };

  async componentWillMount() {
    let arraySchema = [];
    const itemToEdit = JSON.parse(localStorage.getItem("ItemToEdit"));
    try {
      const response = await api.get("/course");

      response.data.data.map(
        item =>
          (arraySchema = [
            ...arraySchema,
            {
              Código: item.id,
              Nome: item.name,
              Habilitado: item.enable
            }
          ])
      );

      this.setState({ arrayCourse: arraySchema });
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

  handleInputCourseName = e => {
    this.setState({ courseName: e.target.value });
  };

  updateCourse = async data => {
    const token = localStorage.getItem("tokenUser");
    const { id, body } = data;

    try {
      const response = await api.put(`/course/${id}`, body, {
        headers: {
          authorization: token
        }
      });
    } catch (error) {
      console.log("error update course", error);
    }
  };

  registerCourse = async () => {
    const { courseName, enable } = this.state;
    const token = localStorage.getItem("tokenUser");

    try {
      if (courseName !== null) {
        const response = await api.post(
          "/course",
          {
            name: courseName,
            enable: enable
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
    const { arrayCourse, courseName, enable } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={() => this.openModal()}>CRIAR</ButtonAdd>
          <Title>Cursos</Title>
        </ContainerTitle>
        <List contentList={arrayCourse} onUpdateForm={this.updateCourse} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <Title>Criar novo curso</Title>
          <TextForm>Nome do curso:</TextForm>
          <Input value={courseName} onChange={this.handleInputCourseName} />

          <TextForm>Habilitar </TextForm>
          <Input
            type="checkbox"
            value={enable}
            onChange={() => this.setState({ enable: true })}
          />
          <ButtonIn onClick={() => this.registerCourse()}>
            CADASTRAR CURSO
          </ButtonIn>
        </Modal>
      </Container>
    );
  }
}

export { Course };
