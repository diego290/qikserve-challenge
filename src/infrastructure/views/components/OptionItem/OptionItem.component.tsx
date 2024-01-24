import { formatPrice } from '../../../../utils/formatPrice';
import { OptionItemStyled } from './OptionItem.styled';

interface Props {
  name: string;
  price: number;
  isSelected: boolean;
  onOptionChange: (value: number) => void;
  value: number;
}

const OptionItem = ({ name, price, isSelected, onOptionChange, value }: Props) => {

  const handleChange = () => {
    onOptionChange(value);
  };

  return (
    <OptionItemStyled.ItemContainer htmlFor={`option-${value}`}>
      <OptionItemStyled.LabelContainer htmlFor={`option-${value}`}>
        <OptionItemStyled.Name>{name}</OptionItemStyled.Name>
        <OptionItemStyled.Price>{formatPrice(price)}</OptionItemStyled.Price>
      </OptionItemStyled.LabelContainer>
      <OptionItemStyled.RadioInput
        type="radio"
        id={`option-${value}`}
        name="portion"
        value={value}
        checked={isSelected}
        onChange={handleChange}
      />
    </OptionItemStyled.ItemContainer>
  );
};

export default OptionItem;
