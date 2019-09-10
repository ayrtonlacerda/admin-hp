import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditionForm from "../../components/EditionForm";
import Modal from "react-modal";
import api from "../../services/api";

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
    dataSend: {},
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

  handlerEdit = param => {
    let data = {};
    Object.keys(param).map(key => {
      data[key] = "";
    });
    this.setState({ dataToEdit: param, modalIsOpen: true, dataSend: data });
  };

  changeInputValue = (value, key) => {
    const { dataSend } = this.state;
    let data = dataSend;
    data[key] = value;
    console.log("data: \n", data);
    this.setState({ dataSend: data });
  };

  saveEdition = async () => {
    const { onUpdateForm } = this.props;
    const { dataSend, dataToEdit } = this.state;

    let data = {};
    Object.keys(dataSend).map(key => {
      if (dataSend[key] !== "") {
        data = {
          ...data,
          key: dataSend.key
        };
      }
    });

    const send = {
      id: dataToEdit.id,
      body: data
    };
    console.log("send: ", [send, dataSend, dataToEdit]);
    onUpdateForm(send);
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
            {Object.keys(this.state.dataToEdit).map(key => {
              console.log("keyy object\n\n", key);
              if (key !== "id" && key !== "createdAt" && key !== "updatedAt") {
                return (
                  <Title>
                    {key === "enable" ? <ImageCheck /> : `${key}\n`}
                    {console.log(window.location.pathname)}
                    <Input
                      placeholder={this.state.dataSend[key].value}
                      value={this.state.dataSend.key}
                      onChange={value => this.changeInputValue(value, key)}
                    />
                  </Title>
                );
              }
            })}
            <ButtonIn onClick={() => this.saveEdition()}>
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
                <ButtonEdit onClick={() => this.handlerEdit(item)}>
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
