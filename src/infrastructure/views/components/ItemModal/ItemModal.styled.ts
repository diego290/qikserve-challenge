import styled from '@emotion/styled';

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  width: 480px;
  height: 90%;

  @media (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: ${props => props.theme.colors.white};
`;

const ItemImage = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 320px;
  background-image: url('');
  background-size: cover;
  background-position: center;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 1;
  padding: 16px;
  overflow: auto;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.offBlack6};
`;

const Description = styled.p`
  margin: 8px 0 4px 0;
  font-size: 16px;
  color: ${props => props.theme.colors.offBlack7};
`;

const HeaderOptionContainer = styled.div`
  background-color: ${props => props.theme.colors.offWhite6};
  padding: 16px 24px 16px 24px;
  margin: 16px 0 0 0;
  margin-left: -16px;
  margin-right: -16px;
`;

const TitleOptionContainer = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${props => props.theme.colors.offBlack7};
  font-weight: bold;
`;

const DescriptionOptionContainer = styled.p`
  margin: 0;
  margin-top: -5px;
  font-size: 16px;
  color: ${props => props.theme.colors.offBlack8};
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 8px;
  }
`;

const AddToOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  padding: 12px 24px 24px 24px;
  box-sizing: border-box;
  border: none;
`;

export const ItemModalStyled = {
  ModalContainer,
  ModalContent,
  CloseButton,
  ItemImage,
  ItemContainer,
  Title,
  Description,
  HeaderOptionContainer,
  TitleOptionContainer,
  DescriptionOptionContainer,
  OptionContainer,
  AddToOrderContainer,
};
