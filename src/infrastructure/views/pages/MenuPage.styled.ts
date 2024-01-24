import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  margin-top: 0;
  width: 100%;
  max-width: 1024px;

  @media (max-width: 768px) {
    background-color: ${props => props.theme.colors.white};
    max-width: 100%;
  }
`;

const SearchContainer = styled.div`
  background-color: transparent;
  margin: 8px 0;

  @media (max-width: 768px) {
    margin: 8px 16px;
  }
`;

const MenuPageContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 24px;
  padding: 32px 40px 32px 40px;
  margin: 0 0 32px 0;
  background-color: ${props => props.theme.colors.offWhite6};
  align-items: start;

  @media (max-width: 768px) {
    background-color: ${props => props.theme.colors.white};
    grid-template-columns: 1fr;
    padding: 0 16px 0 16px;
    margin: 0;
    align-items: stretch;
  }
`;

const SectionMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  padding: 12px 0 0 0;
  margin: 0 0 40px 0;
  overflow-x: auto;
`;

const ItemMenuTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ItemMenuNameContainer = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: ${props => props.theme.colors.offBlack6};
`;

const ItemMenuIconContainer = styled.div`
  font-size: 32px;
  text-align: right;
  color: ${props => props.theme.colors.offBlack6};
`;

const MenuContainer = styled.div`
  grid-column: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 2px 14px 0px #00000024;

  @media (max-width: 768px) {
    box-shadow: none;
    width: 100%;
    padding: 0;
  }
`;

const MobileCartButtonContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 0 8px 24px 8px;
  }
`;

const MobileAllergyContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 8px;
    background-color: ${props => props.theme.colors.white};

    & p {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: bold;
      color: ${props => props.theme.colors.primaryColour};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const MenuPageStyled = {
  Container,
  SearchContainer,
  MenuPageContainer,
  SectionMenuContainer,
  ItemMenuTitleContainer,
  ItemMenuNameContainer,
  ItemMenuIconContainer,
  MenuContainer,
  MobileCartButtonContainer,
  MobileAllergyContainer
};
