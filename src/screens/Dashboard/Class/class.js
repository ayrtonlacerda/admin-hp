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
} from './stylesclass';
import axios from 'axios';

import {
  List
} from '../../../components';

const arrayTest = [
  {
    "id": 1,
    "attribute": "A",
    "code": 6283053,
    "validity": null,
    "createdAt": "2019-05-20T18:10:37.357Z",
    "updatedAt": "2019-05-20T18:10:37.357Z",
    "class_id": 1,
  },
  {
    "id": 2,
    "attribute": "B",
    "code": 1253679,
    "validity": null,
    "createdAt": "2019-05-20T18:10:42.406Z",
    "updatedAt": "2019-05-20T18:10:42.406Z",
    "class_id": 1,
  },
  {
    "id": 3,
    "attribute": "A",
    "code": 9886077,
    "validity": null,
    "createdAt": "2019-05-20T19:35:30.013Z",
    "updatedAt": "2019-05-20T19:35:30.013Z",
    "class_id": 2,
  },
  {
    "id": 4,
    "attribute": "A",
    "code": 3134483,
    "validity": null,
    "createdAt": "2019-05-20T19:35:31.653Z",
    "updatedAt": "2019-05-20T19:35:31.653Z",
    "class_id": 2,
  },
  {
    "id": 5,
    "attribute": "B",
    "code": 9424026,
    "validity": null,
    "createdAt": "2019-05-20T19:35:36.209Z",
    "updatedAt": "2019-05-20T19:35:36.209Z",
    "class_id": 2,
  }
]

class Classes extends Component {
  state = {
    arrayclass: [],
    form: false,
  }

  componentWillMount() {
    this.getclass();
  }

  getclass = async (info) => {
    let arraySchema = [];
    try {
      const response = await axios.get('http://157.230.177.190/class');
      console.log('response get\n', response);

      response.data.map(item =>
        arraySchema = [
          ...arraySchema,
          {
            "id": item.id,
            "Codigo": item.code,
            "Turma": item.attribute,
            "Disciplina": item.disciplineInfo.name,
            "Id da disciplina": item.discipline_id,
            "Nome Discipina": item.disciplineInfo.name,
            "Id Responsavel": item.disciplineInfo.accountable
          }
        ]
      )

      console.log('arraySchema\n', arraySchema);
      this.setState({ arrayclass: arraySchema })


    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { arrayclass , form } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <Title>Turmas</Title>
        </ContainerTitle>

        <List contentList={arrayclass} />
        

        <CreateView>
          <ButtonAdd onClick={ () => this.setState({form : true})}>CRIAR</ButtonAdd>
        </CreateView>

       

        {
          form &&(

        <HiddenContainer> 

        <FormView>
            <TextFormView>
              <TextForm>ID da disciplina:</TextForm>
            </TextFormView>
              
            <InputView>
              <Input value={this.state.email} onChange={this.handleInputEmail} />
            </InputView>
  
          </FormView>

        <FormView>
        
        <TextFormView>
          <TextForm>Nome da Turma:</TextForm>
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

export { Classes }