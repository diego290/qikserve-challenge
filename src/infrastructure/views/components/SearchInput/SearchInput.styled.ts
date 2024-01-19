import styled from '@emotion/styled';
import { FiSearch } from 'react-icons/fi';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.offBlack5};
  color:  ${props => props.theme.colors.offBlack1};
  background: linear-gradient(0deg, ${props => props.theme.colors.white}, ${props => props.theme.colors.white}), linear-gradient(0deg, ${props => props.theme.colors.offBlack5}, ${props => props.theme.colors.offBlack5});
  font-size: 16px;
  padding-left: 35px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: ${props => props.theme.colors.offBlack0};
  }
`;

const Icon = styled(FiSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 19.71px;
  color: ${props => props.theme.colors.offBlack5};
`;


export const SearchInputStyled = { SearchContainer, SearchInput, Icon };
