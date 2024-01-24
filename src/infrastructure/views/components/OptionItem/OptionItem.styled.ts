import styled from '@emotion/styled';

const ItemContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px 16px 8px;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
`;

const Name = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.offBlack6};
  font-weight: bold;
`;

const Price = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.offBlack7};
`;

const RadioInput = styled.input`
  appearance: none;
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  border: 3px solid ${props => props.theme.colors.offBlack8};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.white};
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.offBlack8};
    transform: translate(-50%, -50%) scale(0);
    transition: transform ease-in-out 120ms;
  }

  &:checked:after {
    transform: translate(-50%, -50%) scale(1);
    color: ${props => props.theme.colors.offBlack8};
  }
`;

export const OptionItemStyled = {
  ItemContainer,
  LabelContainer,
  Name,
  Price,
  RadioInput
};
