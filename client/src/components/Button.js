import styled, { css } from "styled-components";

const Button = styled.button`
  border: 3px solid hotpink;
  background: cyan;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: ${props => props.theme.borderRadius};

  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:hover {
    background: hotpink;
    border-color: cyan;
  }
`;

export default Button;
