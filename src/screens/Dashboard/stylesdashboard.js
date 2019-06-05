import styled from 'styled-components';
import { colors } from '../../styles';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 125vw;
  padding: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.white};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  align-items: center;
  justify-content: space-between;
  border-collapse: collapse;
  margin-right: 30px;
`;

export const Title = styled.p`
  font-size: 45px;
  font-family: Quicksand-Bold;
  margin-left: 30px;
  padding: 0px;
  color: ${colors.white};
 `;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column; 
  height: 125vh;
  padding: 0px;
  margin-right: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.primary};
  border-collapse: collapse;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

export const ButtonNavigation = styled.button`
  width: 150px;
  height: 48px;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 16px;
  font-family: Quicksand-Medium;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  border: 0px;
`;
