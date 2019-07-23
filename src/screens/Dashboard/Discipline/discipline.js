import React, { Component } from "react";
import {
  Container,
  ContainerTitle,
  Title,
  ButtonAdd
} from "./stylesdiscipline";
import api from "../../../services/api";

import { List } from "../../../components";

class Discipline extends Component {
  state = {
    arrayDiscipline: []
  };

  async componentWillMount() {
    let arraySchema = [];
    try {
      const response = await api.get("/discipline");
      console.log("response get\n", response);

      response.data.map(
        item =>
          (arraySchema = [
            ...arraySchema,
            {
              id: item.id,
              name: item.name,
              start: item.start,
              finish: item.finish,
              "Nome do Curso": item.courseInfo.name,
              idIfCourse: item.courseInfo.id,
              nameOfAccountable: item.accountableInfo.name,
              idOfnameOfAccountable: item.accountableInfo.id
            }
          ])
      );

      console.log("arraySchema\n", arraySchema);
      this.setState({ arrayDiscipline: arraySchema });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { arrayDiscipline } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.logged}>CRIAR</ButtonAdd>
          <Title>Disciplinas</Title>
        </ContainerTitle>
        <List contentList={arrayDiscipline} />
      </Container>
    );
  }
}

export { Discipline };
