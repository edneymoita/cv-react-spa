import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

function Info(props) {
  return (
    <InfoContainer>
      <img src={props.src} alt={props.alt} />
      <p>{props.children}</p>
    </InfoContainer>
  );
}

export default Info;
