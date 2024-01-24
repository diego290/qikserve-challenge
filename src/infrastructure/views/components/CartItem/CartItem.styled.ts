import styled from '@emotion/styled';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-start;
    flex-basis: 100px;
  }
`;

const ItemNameContainer = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.offBlack6};
  font-size: 16px;
  font-weight: bold;
`;

const ItemDescriptionContainer = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.offBlack8};
  font-size: 16px;
`;

const ItemPriceContainer = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.offBlack8};
  font-size: 16px;
  font-weight: bold;
`;

export const CartItemStyled = {
  ItemContainer,
  ItemNameContainer,
  ItemDescriptionContainer,
  ItemPriceContainer
};
