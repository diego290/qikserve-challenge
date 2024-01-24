import styled from '@emotion/styled';

const AddToOrderButton = styled.button`
  background-color: ${props => props.theme.colors.primaryColour};
  width: 100%;
  height: 48px;
  color: ${props => props.theme.colors.white};
  border: none;
  font-size: 18px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryColourHover};
  }
`;

export const ButtonStyled = {
  AddToOrderButton
};
