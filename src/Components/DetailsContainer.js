import React from "react";
import styled from "styled-components";

const DetailsPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(136, 14, 79, 0.3);
  color: #1f1f1f;
  font-weight: 600;
  text-align: center;
  padding: 10px 10px;
  box-sizing: border-box;
  height: 100%;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 1);
`;

function DetailsContainer(props) {
  return <DetailsPanel>{props.children}</DetailsPanel>;
}

export default DetailsContainer;
