import React, { Component, Fragment } from 'react'
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
} from './stylesdiscipline';
import axios from 'axios';

import {
  List
} from '../../../components';

const arrayTest = [
  {
    "id": 1,
    "name": "mat1",
    "accountable": 4,
    "start": null,
    "finish": null,
    "createdAt": "2019-05-20T17:59:40.103Z",
    "updatedAt": "2019-05-20T17:59:40.103Z",
    "course_id": 2,
  },
  {
    "id": 2,
    "name": "mat2",
    "accountable": 4,
    "start": null,
    "finish": null,
    "createdAt": "2019-05-20T18:03:14.994Z",
    "updatedAt": "2019-05-20T18:03:14.994Z",
    "course_id": 2,
  },
  {
    "id": 3,
    "name": "mat3",
    "accountable": 3,
    "start": null,
    "finish": null,
    "createdAt": "2019-05-20T18:03:54.764Z",
    "updatedAt": "2019-05-20T18:03:54.764Z",
    "course_id": 3,
  }
]



class Discipline extends Component {
  state = {
    arrayDiscipline: [],
    form: false
  }

  componentWillMount() {
    this.getDiscipline();
  }

  getDiscipline = async (info) => {
    let arraySchema = [];
    try {
      const response = await axios.get('http://157.230.177.190/discipline');
      console.log('response get\n', response);

      response.data.map(item => 
        arraySchema = [
          ...arraySchema,
          { 
            "id": item.id,
            "name": item.name,
            "start": item.start,
            "finish": item.finish,
            "Nome do Curso": item.courseInfo.name,
            "idIfCourse": item.courseInfo.id,
            "nameOfAccountable": item.accountableInfo.name,
            "idOfnameOfAccountable": item.accountableInfo.id
          }
        ]
      )

      console.log('arraySchema\n', arraySchema);
      this.setState({ arrayDiscipline: arraySchema })

      
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { arrayDiscipline , form } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <Title>Disciplinas</Title>
        </ContainerTitle>

        <List contentList={arrayDiscipline} />

        <CreateView>
        <ButtonAdd onClick={ () => this.setState({form : true})}>CRIAR</ButtonAdd>
        </CreateView>

        {
          form &&(

        <HiddenContainer> 

        <FormView>
            <TextFormView>
              <TextForm>ID do curso:</TextForm>
            </TextFormView>
              
            <InputView>
              <Input value={this.state.email} onChange={this.handleInputEmail} />
            </InputView>
  
          </FormView>

        <FormView>
        
        <TextFormView>
          <TextForm>ID do responsável:</TextForm>
        </TextFormView>
       
        <InputView>
          <Input value={this.state.email} onChange={this.handleInputEmail} />
        </InputView>

        </FormView>

        <FormView>
        
        <TextFormView>
          <TextForm>Nome da disciplina:</TextForm>
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

export { Discipline }