import styled from 'styled-components';
import { colors } from '../../../styles';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin-left: 30px;
  padding: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.white};
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  padding: 0px;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
`;

export const Title = styled.p`
  font-size: 45px;
  font-family: Quicksand-Bold;
  margin-left: 30px;
 `;

export const ButtonAdd = styled.button`
width: 100px;
height: 35px;
background-color: ${colors.third};
color: ${colors.white};
font-size: 14px;
font-family: Quicksand-Bold;
align-items: center;
justify-content: center;
border-radius: 25px;
border: 0px;
`;