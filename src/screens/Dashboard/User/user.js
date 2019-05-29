import React, { Component, Fragment } from 'react'
import axios from 'axios';
import {
  Container,
  ContainerTitle,
  Title,
  ButtonAdd
} from './stylesuser';

import {
  List
} from '../../../components';

const arrayTest = [
  {
    "id": 2,
    "name": "ayrton",
    "email": "ayrton@email.com",
    "type": "admin",
    "token": "777",
    "validity": null,
    "password_hash": "sqn409",
    "createdAt": "2019-05-20T17:15:12.264Z",
    "updatedAt": "2019-05-20T17:18:43.441Z"
  },
  {
    "id": 4,
    "name": "caio",
    "email": "caio@email.com",
    "type": "prof",
    "token": "1234",
    "validity": null,
    "password_hash": "sqn409",
    "createdAt": "2019-05-20T17:24:09.107Z",
    "updatedAt": "2019-05-20T17:24:09.107Z"
  },
  {
    "id": 1,
    "name": "Pedro",
    "email": "pedro@email.com",
    "type": "student",
    "token": "1",
    "validity": null,
    "password_hash": "sqn409",
    "createdAt": "2019-05-20T17:14:58.312Z",
    "updatedAt": "2019-05-20T17:29:35.727Z"
  },
  {
    "id": 3,
    "name": "paulo",
    "email": "paulo@email.com",
    "type": "prof",
    "token": "12",
    "validity": null,
    "password_hash": "sqn409",
    "createdAt": "2019-05-20T17:15:29.389Z",
    "updatedAt": "2019-05-20T17:29:50.844Z"
  },
  {
    "id": 6,
    "name": "day",
    "email": "day@email.com",
    "type": "student",
    "token": "123",
    "validity": null,
    "password_hash": "sqn409",
    "createdAt": "2019-05-20T17:33:33.769Z",
    "updatedAt": "2019-05-20T17:33:33.769Z"
  }
]

class Users extends Component {
  state = {
    arrayuser: []
  }

  componentWillMount() {
    this.getuser();
  }

  getuser = async (info) => {
    let arraySchema = [];
    try {
      const response = await axios.get('http://157.230.177.190:3000/user');
      console.log('response get\n', response);

      response.data.map(item =>
        arraySchema = [
          ...arraySchema,
          {
            "id": item.id,
            "name": item.name,
            "email": item.email,
            "type": item.type,
            "validity": item.validity,
            "createdAt": item.createdAt,
            "updatedAt": item.updatedAt
          }          
        ]
      )

      console.log('arraySchema\n', arraySchema);
      this.setState({ arrayuser: arraySchema });

    } catch (error) {
      console.log(error)
    }  
  }

  render() {
    const { arrayuser } = this.state;
    return (
      <Container>
        <ContainerTitle>
          <ButtonAdd onClick={this.logged}>CRIAR</ButtonAdd>
          <Title>User</Title>
        </ContainerTitle>
        <List contentList={arrayuser} />
      </Container>
    );
  }
}

export { Users }