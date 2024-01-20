import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.primaryColour};
  height: 52px;
  width: 100%;
`;

const MenuButton = styled.button`
  border: none;
  width: 232px;
  font-size: 20px;
  font-family: inherit;
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  box-shadow: inset 0 -3px 0 0 transparent;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: inset 0 -3px 0 0 ${props => props.theme.colors.white};
  }
`;

export const MenuStyled = { Container, MenuButton };
