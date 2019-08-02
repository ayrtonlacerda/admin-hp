import React, { Component } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  ButtonAdd,
  TextForm,
  Input,
  ButtonIn
} from "./styles";
import Modal from "react-modal";

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

class EditionForm extends Component {
  state = {
    arrayclass: [],
    modalIsOpen: false
  };

  componentWillMount() {
    {
      console.log("AAAAAAAAAAE", this.props.content);
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
    {
      console.log("TEEEESTE", this.props.content);
    }

    return (
      <Container>
        {console.log("TEEEESTE", this.props.content)}
        {/* <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <Title>Editar Informações</Title>

          <ButtonIn onClick={() => this.registerCourse()}>
            Salvar Edição
          </ButtonIn>
        </Modal> */}
      </Container>
    );
  }
}

export default EditionForm;
