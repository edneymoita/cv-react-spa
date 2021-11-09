import React from "react";
import styled from "styled-components";
import DetailsContainer from "./DetailsContainer";

const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LanguageDetail = styled.p`
  margin: 12px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #880e4f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  color: #880e4f;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

function Languages() {
  return (
    <DetailsContainer>
      <h3>Idiomas</h3>
      <LanguageList>
        <LanguageDetail>PORTUGUÊS - NATIVO</LanguageDetail>
        <LanguageDetail>INGLÊS - FLUENTE (IELTS 7,5)</LanguageDetail>
        <LanguageDetail>FRANCÊS - AVANÇADO</LanguageDetail>
        <LanguageDetail>ESPANHOL - BÁSICO</LanguageDetail>
        <LanguageDetail>JAPONÊS - BÁSICO (EM ESTUDO)</LanguageDetail>
      </LanguageList>
    </DetailsContainer>
  );
}

export default Languages;
