import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  ContainerTitle,
  Title,
  MenuContainer,
  ContainerMenu,
  ButtonNavigation
} from "./stylesdashboard";

import { Course, Discipline, Classes, Users } from "../index";

class Dashboard extends Component {
  state = {
    renderPage: "course"
  };

  async componentDidMount() {
    const item = await localStorage.getItem("editItem");
    console.log(item);
  }
  renderPageFunc = () => {
    const { renderPage } = this.state;
    if (renderPage === "course") {
      return <Course />;
    }
    if (renderPage === "discipline") {
      return <Discipline />;
    }
    if (renderPage === "class") {
      return <Classes />;
    }
    if (renderPage === "user") {
      return <Users />;
    }
  };

  logout = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <MenuContainer>
          <ContainerTitle>
            <Title>SPHL Admin</Title>
          </ContainerTitle>
          <ContainerMenu>
            <ButtonNavigation
              onClick={() => this.setState({ renderPage: "course" })}
            >
              Cursos
            </ButtonNavigation>
            <ButtonNavigation
              onClick={() => this.setState({ renderPage: "discipline" })}
            >
              Disciplinas
            </ButtonNavigation>
            <ButtonNavigation
              onClick={() => this.setState({ renderPage: "class" })}
            >
              Turmas
            </ButtonNavigation>
            <ButtonNavigation
              onClick={() => this.setState({ renderPage: "user" })}
            >
              Usuários
            </ButtonNavigation>
            <ButtonNavigation onClick={this.logout}>Sair</ButtonNavigation>
          </ContainerMenu>
        </MenuContainer>
        {this.renderPageFunc()}
      </Container>
    );
  }
}

const DashboardRoutes = withRouter(Dashboard);

export { DashboardRoutes as Dashboard };
