import styled from '@emotion/styled';

const CartContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.offWhite6};
  height: 100%;
  width: 100%;
  padding: 0;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: ${props => props.theme.colors.black};
`;

const HeaderCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.offWhite7};
  padding: 0 24px 0 24px;
  min-height: 64px;
`;

const TitleCart = styled.h1`
  color: ${props => props.theme.colors.offBlack7};
  margin: 0;
  font-size: 18px;
`;

const ContainerCartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: ${props => props.theme.colors.white};
  overflow-y: auto;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: ${props => props.theme.colors.offBlack7};
  padding: 16px 16px 16px 16px;
  font-size: 16px;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.colors.offWhite7};

  &:first-child {
    padding: 24px 16px 16px 16px;
  }

  &:last-child {
    padding: 16px 16px 24px 16px;
    border-bottom: none;
  }
`;

const QuantityContainer = styled.div`
  margin: 8px 0 0 0;
`;

const FooterCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.offBlack6};
  background-color: ${props => props.theme.colors.offWhite6};
  padding: 0 16px 0 16px;
  height: 60px;
  min-height: 60px;
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

const CheckoutButtonContainer = styled.div`
  margin-top: auto;
  padding: 24px;
`;

export const CartMobileStyled = {
  CartContainer,
  CartContent,
  CloseButton,
  HeaderCartContainer,
  TitleCart,
  ContainerCartItem,
  ContentCart,
  QuantityContainer,
  FooterCartContainer,
  FooterTitleCart,
  FooterPriceCart,
  FooterSubTitleCart,
  FooterSubPriceCart,
  CheckoutButtonContainer
};
