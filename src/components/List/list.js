import React, { Component, Fragment } from "react";
import {
  Container,
  Title,
  Table,
  Coluna,
  TitleColumn,
  Line,
  ImageCheck,
  Check,
  ButtonDelete,
  ButtonEdit
} from "./stylesList";

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

class List extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    arrayCheck: []
  };

  render() {
    const { contentList } = this.props;
    console.log(this.props.contentList.length);
    if (contentList.length === 0) {
      return <Title>Ops...</Title>;
    }
    return (
      <Container>
        <Table>
          <Coluna>
            <TitleColumn none />
            <TitleColumn none />
            {Object.keys(contentList[0]).map(key => (
              <TitleColumn>{key}</TitleColumn>
            ))}
          </Coluna>
          {contentList.map(item => (
            <Coluna>
              <Line button>
                <ButtonEdit>EDITAR</ButtonEdit>
              </Line>
              <Line button>
                <ButtonDelete>DELETAR</ButtonDelete>
              </Line>
              {Object.keys(item).map(key => (
                <Line>{key === "enable" ? <ImageCheck /> : item[key]}</Line>
              ))}
            </Coluna>
          ))}
        </Table>
      </Container>
    );
  }
}

export { List };
