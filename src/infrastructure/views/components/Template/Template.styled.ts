import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.offWhite5};
  height: 100%;
  width: 100vw;
  max-width: 1400px;
`;

export const TemplateStyled = { Container };
