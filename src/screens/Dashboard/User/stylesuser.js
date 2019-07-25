import styled from "styled-components";
import { colors } from "../../../styles";

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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: 400px;
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: 5px;
`;

export const TextForm = styled.p`
  font-size: 18px;
  width: 80%;
  font-family: Quicksand-Medium;
`;

export const Input = styled.input`
  width: 80%;
  border-bottom-width: 2px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-color: ${colors.primary};
  font-size: 25px;
  font-family: Quicksand-Regular;
`;

export const ButtonIn = styled.button`
  width: 150px;
  height: 48px;
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-size: 18px;
  font-family: Quicksand-Medium;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 0px;
`;
