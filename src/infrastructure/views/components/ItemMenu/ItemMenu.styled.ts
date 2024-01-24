import styled from '@emotion/styled';

const ItemContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0 16px 0;
  align-items: center;
  justify-content: space-between;
  max-height: 117px;
  background-color: inherit;
  cursor: pointer;
`;

const QuantityTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  width: 19px;
  height: 19px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryColour};
  padding-top: 1px;
  border-radius: 6px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 1;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.offBlack6};
`;

const Description = styled.p`
  margin: 4px 0 4px 0;
  font-size: 16px;
  color: ${props => props.theme.colors.offBlack7};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: normal;

  @media (max-width: 480px) {
    -webkit-line-clamp: 2;
  }
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.offBlack7};
`;

const ItemImage = styled.div`
  flex-shrink: 0;
  width: 128px;
  height: 85px;
  background-image: url('');
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`;

export const ItemMenuStyled = {
  ItemContainer,
  TextContainer,
  QuantityTitleContainer,
  Quantity,
  Title,
  Description,
  Price,
  ItemImage
};
