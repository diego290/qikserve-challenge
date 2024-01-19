import styled from '@emotion/styled';

const ImgContainer = styled.div`
  height: 150px;
  width: 100%;
  background-image: url(${props => props.theme.images.bannerImage});
  background-size: cover;
  background-position: center;
`;

export const HeaderStyled = { ImgContainer };
