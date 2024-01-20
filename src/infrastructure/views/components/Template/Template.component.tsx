import Header from '../Header/Header.component';
import { TemplateStyled } from './Template.styled';

interface Props {
  children: React.ReactNode
}

function Template({ children }: Props) {

  return (
    <TemplateStyled.Container >
      <Header />
      {children}
    </TemplateStyled.Container>
  );
}

export default Template;
