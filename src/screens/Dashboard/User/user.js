import React, { Component } from "react";
import { Container, ContainerTitle, Title, ButtonAdd } from "./stylesuser";
import api from "../../../services/api";

import { List } from "../../../components";

class Users extends Component {
  state = {
    arrayuser: []
  };

  componentWillMount() {
    this.getUser();
  }

  getUser = async info => {
    let arraySchema = [];
    try {
      const response = await api.get("/user");

      response.data.map(
        item =>
          (arraySchema = [
            ...arraySchema,
            {
              id: item.id,
              name: item.name,
              email: item.email,
              type: item.type,
              validity: item.validity,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt
            }
          ])
      );
      this.setState({ arrayuser: arraySchema });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { arrayuser } = this.state;
    console.log("PH", arrayuser);
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.createUser}>CRIAR</ButtonAdd>
          <Title>User</Title>
        </ContainerTitle>
        <List contentList={arrayuser} />
      </Container>
    );
  }
}

export { Users };
