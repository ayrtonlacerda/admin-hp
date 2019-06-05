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
  width: 95%;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 45px;
  font-family: Quicksand-Bold;
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
margin-top: 15px;
`;

export const TextForm = styled.p`
  font-size: 18px;
  font-family: Quicksand-Medium;
`;


export const Input = styled.input`
  width: 95%;
  height: 35px;
  border-bottom-width: 2px;
  border-top-width: 0;
  border-left-width:0;
  border-right-width: 0;
  border-color: ${colors.primary};
  font-size: 14px;
  font-family: Quicksand-Regular;
`;

export const ButtonIn = styled.button`
  width: 15%;
  height: 35px;
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-size: 14px;
  font-family: Quicksand-Medium;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 0px;
  margin-left: 40px,
`;

export const FormView = styled.div`
display: flex;
flex-direction: row;
width: 95%;
align-items: center;
padding-top: 10px;
padding-bottom: 10px;
padding-top: 10px;
margin-bottom:20px;
`;

export const TextFormView = styled.div`
display: flex;
height: 35px;
`;

export const InputView = styled.div`
display: flex;
width: 80%;
align-items: center;
justify-content: center;
height: 35px;
margin-right: 10px;
`;

export const HiddenContainer = styled.div`
display: flex;
flex-direction: column;
width: 90vw;
height: 100vh;
padding: 0px;
align-items: flex-start;
justify-content: flex-start;
background-color: ${colors.white};

`;

export const ButtonView = styled.div`
display: flex;
flex-direction: column;
width: 77vw;
padding: 0px;
align-items: flex-end;
justify-content: flex-end;

`;

export const CreateView = styled.div`
margin-bottom: 15px;

`;