import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.offWhite5};
  width: 100vw;
  height: 100vh;
  max-width: 1400px;
`;

export const TemplateStyled = { Container };
