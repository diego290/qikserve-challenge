import styled from '@emotion/styled';

const SectionsMenuContainer = styled.div`
  display: flex;
  width: 104px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ImageCircle = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-image: url('');
  background-size: cover;
  background-position: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow:
    0 0 0 2px ${props => props.theme.colors.white}
    0 0 0 4px ${props => props.theme.colors.primaryColour} transparent;
  transition: box-shadow 0.3s;

  &.selected {
    box-shadow:
    0 0 0 2px ${props => props.theme.colors.white},
    0 0 0 4px ${props => props.theme.colors.primaryColour};
  }
`;

const Text = styled.p`
  margin: 24px 0 16px 0;
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.theme.colors.offBlack6};

  &.selected {
    font-weight: bold;
  }
`;

const Line = styled.hr`
  margin: 0;
  border: none;
  height: 2px;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s;

  &.selected {
    background-color: ${props => props.theme.colors.primaryColour};
  }
`;

export const SectionsMenuStyled = { SectionsMenuContainer, ImageCircle, Text, Line };
