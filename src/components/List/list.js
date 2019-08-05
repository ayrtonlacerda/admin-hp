import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditionForm from "../../components/EditionForm";
import Modal from "react-modal";

import {
  Container,
  Title,
  Table,
  Coluna,
  TitleColumn,
  Line,
  ImageCheck,
  ButtonDelete,
  ButtonEdit,
  ButtonIn,
  Input
} from "./stylesList";

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

class List extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    arrayCheck: [],
    dataToEdit: [],
    modalIsOpen: false
  };
  storeItem = async item => {};
  openEditForm = item => {
    //console.log("IIIITEM", item);
    return <EditionForm content={item} />;
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

  render() {
    const { contentList } = this.props;
    console.log(this.props.contentList.length);
    if (contentList.length === 0) {
      return <Title>Ops...</Title>;
    }
    return (
      <Container>
        <Table>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <Title>Editar Informações</Title>
            {/* {Object.keys(contentList[0]).map(key => (
              <Title>
                {key}
                <Input />
              </Title>
            ))}
            {console.log(this.state.dataToEdit)} */}
            {Object.values(this.state.dataToEdit).map(key => (
              <Title>
                {key === "enable" ? <ImageCheck /> : this.state.dataToEdit[key]}
                {console.log(window.location.pathname)}
                <Input placeholder={key} />
              </Title>
            ))}

            <ButtonIn onClick={() => this.registerCourse()}>
              Salvar Edição
            </ButtonIn>
          </Modal>
          <Coluna>
            <TitleColumn none />
            <TitleColumn none />
            {Object.keys(contentList[0]).map(key => (
              <TitleColumn>{key}</TitleColumn>
            ))}
          </Coluna>
          {contentList.map(item => (
            <Coluna>
              <Line button>
                <ButtonEdit
                  onClick={() =>
                    this.setState({ dataToEdit: item, modalIsOpen: true })
                  }
                >
                  EDITAR
                </ButtonEdit>
              </Line>
              <Line button>
                <ButtonDelete>DELETAR</ButtonDelete>
              </Line>
              {Object.keys(item).map(key => (
                <Line>{key === "enable" ? <ImageCheck /> : item[key]}</Line>
              ))}
            </Coluna>
          ))}
        </Table>
      </Container>
    );
  }
}

export { List };
