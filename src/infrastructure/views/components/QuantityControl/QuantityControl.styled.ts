import styled from '@emotion/styled';

interface StyledProps {
  size: 'small' | 'large';
}

const sizeStyles = {
  large: {
    containerHeight: '32px',
    iconFontSize: '38px',
    quantityFontSize: '24px',
    quantityMargin: '0 24px 0 24px',
    colorButton: (props: any) => props.theme.colors.offWhite7
  },
  small: {
    containerHeight: '20px',
    iconFontSize: '24px',
    quantityFontSize: '16px',
    quantityMargin: '0 12px 0 12px',
    colorButton: (props: any) => props.theme.colors.primaryColour
  }
};

const Container = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  height: ${props => sizeStyles[props.size].containerHeight};
  background-color: transparent;
`;

const Button = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${props => sizeStyles[props.size].colorButton};
  font-size: ${props => sizeStyles[props.size].iconFontSize};
  cursor: pointer;

  &:focus {
    color: ${props => props.theme.colors.primaryColour};
  }
`;

const DecrementButton = styled(Button)``;

const IncrementButton = styled(Button)``;

const QuantityDisplay = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  height: 100%;
  margin: ${props => sizeStyles[props.size].quantityMargin};
  text-align: center;
  font-size: ${props => sizeStyles[props.size].quantityFontSize};
  font-weight: bold;
  color:  ${props => props.theme.colors.offBlack6};
`;

export const QuantityControlStyled = { Container, DecrementButton, IncrementButton, QuantityDisplay };
