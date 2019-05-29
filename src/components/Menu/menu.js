import * as React from 'react';
import { withRouter } from 'react-router-dom';

import {
  ButtonNavigation,
  Container
} from './stylesmenu';

class Menu extends React.Component {
  state = {}

  navigateCourse = () => {
    this.props.history.push('/dashboard/course')
  }

  render() {
    return (
      <Container>     
        <ButtonNavigation onClick={this.navigateCourse}>Cursos</ButtonNavigation>
        <ButtonNavigation onClick={this.logged}>Disciplinas</ButtonNavigation>
        <ButtonNavigation onClick={this.logged}>Classes</ButtonNavigation>
        <ButtonNavigation onClick={this.logged}>Alunos</ButtonNavigation>      
      </Container>
    );
  }  
}

const MenuRoutes = withRouter(Menu)

export { MenuRoutes as Menu }