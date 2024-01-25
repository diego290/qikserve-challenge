import { ButtonStyled } from './Button.styled';

interface Props {
  name: string;
  info?: string;
  onClick?: () => void;
}

function Button({ name, info, onClick }: Props) {
  const buttonText = info ? `${name} • ${info}` : name;

  return (
    <ButtonStyled.AddToOrderButton onClick={onClick} data-testid="add-to-order-button">
      {buttonText}
    </ButtonStyled.AddToOrderButton>
  );
}

export default Button;
