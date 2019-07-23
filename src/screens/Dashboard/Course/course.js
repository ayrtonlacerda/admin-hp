import React, { Component } from "react";
import { Container, ContainerTitle, Title, ButtonAdd } from "./stylescourse";
import api from "../../../services/api";

import { List } from "../../../components";

class Course extends Component {
  state = {
    arrayCourse: [],
    createFormFlag: false
  };

  async componentWillMount() {
    try {
      const response = await api.get("/course");
      console.log("response get\n", response.data.data);
      this.setState({ arrayCourse: response.data.data });
    } catch (error) {
      console.log(error);
    }
  }

  createCourse = () => {
    return <Title>AAAAAAAE</Title>;
  };

  render() {
    const { arrayCourse } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.createCourse}>CRIAR</ButtonAdd>
          <Title>Cursos</Title>
        </ContainerTitle>
        <List contentList={arrayCourse} />
      </Container>
    );
  }
}

export { Course };
