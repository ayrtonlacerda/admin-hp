import styled from 'styled-components'
import { colors } from '../../styles';

export const Container = styled.div`
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
  font-size: 18px;
  font-family: Quicksand-Medium;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  border: 0px;
`;