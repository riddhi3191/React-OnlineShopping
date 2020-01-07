import React from "react";
import defaultBcg from '../../images/defaultBcg.jpeg'
import styled from "styled-components";


export default function LoginHero({ img, title, max, children }) {
  return (
    <LoginWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div`
text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
`;

LoginHero.defaultProps = {
  img: defaultBcg
};