import styled from '@emotion/styled';

interface StyledProps {
  display: 'flex' | 'none';
}

const displayStyles = {
  flex: {
    display: 'flex',
  },
  none: {
    display: 'none',
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.primaryColour};
  height: 52px;
  width: 100%;

  @media (max-width: 768px) {
    height: 64px;
  }
`;

const Title = styled.h1`
  display: none;
  color: ${props => props.theme.colors.white};
  margin: 0;
  font-size: 18px;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    padding-top: 22px;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }
`;

const Menu = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    display: ${props => displayStyles[props.display].display};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 62px;
    left: 0;
    gap: 10px;
    background-color: ${props => props.theme.colors.primaryColour};
  }
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

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  }
`;

export const MenuStyled = { Container, Title, MobileIcon, Menu, MenuButton };
