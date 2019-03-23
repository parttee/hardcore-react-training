import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = props => {
  const { className } = props;
  return (
    <div className={className}>
      <FontAwesomeIcon icon="spinner" spin pulse />
    </div>
  );
};

export default styled(Loading)`
  @keyframes kissa {
    from {
      transform: translate(-50%, -50%) scale(0.5);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  font-size: 17em;
  color: hotpink;
  pointer-events: none;
  animation: kissa 1s alternate infinite;
`;
