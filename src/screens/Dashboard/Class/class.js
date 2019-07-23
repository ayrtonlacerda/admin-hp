import React, { Component } from "react";
import { Container, ContainerTitle, Title, ButtonAdd } from "./stylesclass";
import api from "../../../services/api";

import { List } from "../../../components";

class Classes extends Component {
  state = {
    arrayclass: []
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

  render() {
    const { arrayclass } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.logged}>CRIAR</ButtonAdd>
          <Title>Classes</Title>
        </ContainerTitle>
        <List contentList={arrayclass} />
      </Container>
    );
  }
}

export { Classes };
