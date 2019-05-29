import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {
  Container,
  Box,
  Title,
  TextForm,
  Input,
  ButtonIn,
} from './styleslogin';

class Login extends Component {
  state = {}

  logged = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <Container>
        <Box>
          <Title>Login</Title>
          <TextForm>email:</TextForm>
          <Input />
          <TextForm>password</TextForm>
          <Input />
          <ButtonIn onClick={this.logged}>ENTRAR</ButtonIn>
        </Box>
      </Container>

    );
  }
};

const LoginRoutes = withRouter(Login);

export { LoginRoutes as Login }