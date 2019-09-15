import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Box,
  Title,
  TextForm,
  Input,
  ButtonIn,
  Image
} from "./styleslogin";

import api from "../../services/api";
import logo from "../../assets/img/logo.png";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  userLogin = async () => {
    const { email, password } = this.state;

    try {
      const response = await api.post("/user/login", {
        email: email,
        password: password
      });

      localStorage.setItem("tokenUser", response.data.token);
      const token = localStorage.getItem("tokenUser");

      this.props.history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  handleInputEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleInputPassWord = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Box>
          <Image src={logo} alt="Logo" />
          <TextForm>Usuário</TextForm>
          <Input value={email} onChange={this.handleInputEmail} />
          <TextForm>Senha</TextForm>
          <Input
            type="password"
            value={password}
            onChange={this.handleInputPassWord}
          />
          <ButtonIn onClick={() => this.userLogin()}>ENTRAR</ButtonIn>
        </Box>
      </Container>
    );
  }
}

const LoginRoutes = withRouter(Login);

export { LoginRoutes as Login };
