import React, { Component, Fragment } from "react";
import { 
  Container,
  ContainerTitle,
  Title,
  ButtonAdd,
  TextForm,
  Input,
  ButtonIn,
  FormView,
  TextFormView,
  InputView,
  HiddenContainer,
  ButtonView,
  CreateView
 } from "./stylescourse";

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
    arrayCourse: [],
    form: false
  };

  componentWillMount() {
    this.getCourse();
  }

  getCourse = async info => {
    try {
      const response = await axios.get("http://157.230.177.190/course");
      console.log("response get\n", response);
      this.setState({ arrayCourse: response.data });
      console.log(this.state.arrayCourse);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { arrayCourse, form } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <Title>Cursos</Title>
        </ContainerTitle>

        <List contentList={arrayCourse} />

        <CreateView>
        <ButtonAdd onClick={ () => this.setState({form : true})}>CRIAR</ButtonAdd>
        </CreateView>

        {
          form &&(

        <HiddenContainer> 

        <FormView>
            <TextFormView>
              <TextForm>Nome do curso:</TextForm>
            </TextFormView>
              
            <InputView>
              <Input value={this.state.email} onChange={this.handleInputEmail} />
            </InputView>
  
          </FormView>

        <ButtonView>
          <ButtonIn onClick={() => {}}>ADICIONAR</ButtonIn>
        </ButtonView>
        

        </HiddenContainer>
        

        

          )
        }


      </Container>
    );
  }
}

export { Course };
