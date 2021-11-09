import React from "react";
import styled from "styled-components";
import DetailsContainer from "./DetailsContainer";

const LanguageList = styled.ul`
  text-align: left;
`;

const LanguageDetail = styled.li`
  width: 70%;
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
