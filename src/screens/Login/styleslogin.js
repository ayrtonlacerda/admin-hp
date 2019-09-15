import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 23spx;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 550px;
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: 5px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-family: Quicksand-Bold;
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

export const Link = styled.link``;
