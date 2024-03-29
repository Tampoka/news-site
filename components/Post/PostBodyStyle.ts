import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 1.2;
  margin: 10px 0 20px;

  @media (max-width: 800px) {
    font-size: 1.8rem;
    margin: 15px 0;
  }
`;

export const Figure = styled.figure`
  //padding: 35% 0 0;
  margin: 0 0 30px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px;

  //if using <img/> instead of Next/Image
  /*  img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      object-fit: cover;
      object-position: center;
    }*/

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  overflow: hidden;

  .minText {
    max-height: 100px;
  }

  font-size: 1.25rem;
  line-height: 1.4;
  max-width: 800px;

  blockquote {
    background: hsl(171, 50%, 87%);
    padding: 10px;
  }

  cite {
    display: flex;
    justify-content: right;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const Meta = styled.footer`
  color: ${(p) => p.theme.colors.gray};

  & > * {
    margin-right: 0.3em;
  }
`;

export const ShowMore = styled.div`{
  cursor: pointer;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.blue};
}`