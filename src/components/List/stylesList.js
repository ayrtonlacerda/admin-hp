import styled from "styled-components";
import { colors } from "../../styles";
import CheckImage from "../../assets/img/icons/check.png";

export const Container = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const Title = styled.p`
  font-size: 24px;
  margin: 20px;
  font-family: Quicksand-Bold;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0px;
  padding: 0px;
`;

export const Coluna = styled.tr`
  margin: 20px;
  border-bottom-width: 1px solid #666;
`;

export const TitleColumn = styled.th`
  font-family: Quicksand-Bold;
  color: ${colors.white};
  background-color: ${props => (!props.none ? colors.primary : colors.white)};
  font-size: 20px;
  padding-left: 25px;
  padding-right: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Line = styled.td`
  text-align: center;
  height: 30px;
  padding: 10px;
  padding-left: ${props => (!props.button ? "25px" : "5px")};
  padding-right: ${props => (!props.button ? "25px" : "5px")};
  font-family: Quicksand-Regular;
  border-bottom: 1px solid #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImageCheck = styled.div`
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  background-image: url(${CheckImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Check = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  border: 3px solid #858585;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${props => (props.check ? "#0780F080" : "#00000000")};
  padding: 0px;
`;

export const ButtonDelete = styled.button`
  width: 100px;
  height: 35px;
  background-color: ${colors.danger};
  color: ${colors.white};
  font-size: 14px;
  font-family: Quicksand-Medium;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 0px;
`;

export const ButtonEdit = styled.button`
  width: 100px;
  height: 35px;
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-size: 14px;
  font-family: Quicksand-Medium;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 0px;
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
