import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Box,
  Title,
  TextForm,
  Input,
  ButtonIn
} from "./styleslogin";

import api from "../../services/api";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  userLogin = async () => {
    const { email, password } = this.state;

    try {
      console.log(this.state.email);
      const response = await api.post("/user/login", {
        email: email,
        password: password
      });

      localStorage.setItem("tokenUser", response.data.token);
      const token = localStorage.getItem("tokenUser");
      console.log("token", token);

      this.props.history.push("/dashboard");
    } catch (error) {
      console.log("Diana");
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
          <Title>Login</Title>
          <TextForm>email:</TextForm>
          <Input value={email} onChange={this.handleInputEmail} />
          <TextForm>password</TextForm>
          <Input value={password} onChange={this.handleInputPassWord} />
          <ButtonIn onClick={() => this.userLogin()}>ENTRAR</ButtonIn>
        </Box>
      </Container>
    );
  }
}

const LoginRoutes = withRouter(Login);

export { LoginRoutes as Login };
