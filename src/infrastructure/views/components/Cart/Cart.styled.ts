import styled from '@emotion/styled';

const CartContainer = styled.div`
  grid-column: 2;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 2px 14px 0px #00000024;
  min-height: 129px;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TitleCart = styled.h1`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.offWhite6};
  color: ${props => props.theme.colors.offBlack7};
  margin: 0;
  padding: 0 24px 0 24px;
  min-height: 64px;
  font-size: 24px;
  text-align: left;
`;

const EmptyCart = styled.p`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.offBlack7};
  margin: 0;
  padding: 0 24px 0 24px;
  min-height: 64px;
  font-size: 16px;
`;

const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 16px 16px 16px 16px;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: ${props => props.theme.colors.offBlack7};
  margin: 0 0 24px 0;
  font-size: 16px;
  text-align: left;

  &:last-child {
    margin: 0 0 8px 0;
  }
`;

const QuantityContainer = styled.div`
  margin: 8px 0 0 0;
`;

const FooterCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.offBlack6};
  background-color: ${props => props.theme.colors.offWhite6};
  padding: 0 16px 0 16px;
  height: 60px;
  border-top: 1px solid ${props => props.theme.colors.offWhite5};
`;

const FooterTitleCart = styled.p`
  margin: 0;
  font-size: 24px;
`;

const FooterPriceCart = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const FooterSubTitleCart = styled.p`
  margin: 0;
  font-size: 16px;
`;

const FooterSubPriceCart = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const CartStyled = {
  CartContainer,
  EmptyCart,
  TitleCart,
  ContainerCart,
  ContentCart,
  QuantityContainer,
  FooterCart,
  FooterTitleCart,
  FooterPriceCart,
  FooterSubTitleCart,
  FooterSubPriceCart
};
