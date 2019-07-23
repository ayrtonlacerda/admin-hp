import React, { Component, Fragment } from "react";
import { Container, ContainerTitle, Title, ButtonAdd } from "./stylescourse";

import axios from "axios";

import { List } from "../../../components";

const arrayTest = [
  {
    id: 1,
    name: "eng redes",
    enable: true,
    createdAt: "2019-05-20T17:37:09.279Z",
    updatedAt: "2019-05-20T17:37:09.279Z"
  },
  {
    id: 2,
    name: "eng eletrica",
    enable: true,
    createdAt: "2019-05-20T17:38:03.587Z",
    updatedAt: "2019-05-20T17:38:03.587Z"
  },
  {
    id: 3,
    name: "eng computaçao",
    enable: true,
    createdAt: "2019-05-20T17:38:11.951Z",
    updatedAt: "2019-05-20T17:38:11.951Z"
  }
];

class Course extends Component {
  state = {
    arrayCourse: []
  };

  componentWillMount() {
    this.getCourse();
  }

  getCourse = async info => {
    try {
      const response = 0; //await axios.get("http://157.230.177.190:3000/course");
      console.log("response get\n", response);
      this.setState({ arrayCourse: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { arrayCourse } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.logged}>CRIAR</ButtonAdd>
          <Title>Cursos</Title>
        </ContainerTitle>
        <List contentList={arrayCourse} />
      </Container>
    );
  }
}

export { Course };
