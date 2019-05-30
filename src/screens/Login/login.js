import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Container,
  Box,
  Title,
  TextForm,
  Input,
  ButtonIn
} from "./styleslogin";

class Login extends Component {
  state = {
    email: null,
    password: null
  };

  logged = () => {
    this.props.history.push("/dashboard");
  };

  userLogin = async () => {
    console.log(this.state.email, this.state.password);

    try {
      const response = await axios.post(
        "http://157.230.177.190:3000/user/login",
        {
          email: this.state.email,
          password: this.state.password
        }
      );
      console.log("response get\n", response);
      this.logged();
    } catch (error) {
      console.log(error);
    }
  };

  handleInputEmail = e => {
    this.setState({ email: e.target.value });
    console.log("Trocou email");
  };

  handleInputPassword = e => {
    this.setState({ password: e.target.value });
    console.log("Trocou senha");
  };

  render() {
    return (
      <Container>
        <Box>
          <Title>Login</Title>
          <TextForm>email:</TextForm>
          <Input value={this.state.email} onChange={this.handleInputEmail} />
          <TextForm>password</TextForm>
          <Input
            value={this.state.password}
            onChange={this.handleInputPassword}
          />
          <ButtonIn onClick={this.userLogin}>ENTRAR</ButtonIn>
        </Box>
      </Container>
    );
  }
}

const LoginRoutes = withRouter(Login);

export { LoginRoutes as Login };
