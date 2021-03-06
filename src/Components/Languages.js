import React from "react";
import styled from "styled-components";
import DetailsContainer from "./DetailsContainer";
import PageContainer from "./PageContainer";
import PageTitle from "./PageTitle";

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
      <PageTitle>Idiomas</PageTitle>
      <PageContainer>
        <LanguageDetail className="detail">PORTUGUÊS - NATIVO</LanguageDetail>
        <LanguageDetail className="detail">
          INGLÊS - FLUENTE (IELTS 7,5)
        </LanguageDetail>
        <LanguageDetail className="detail">FRANCÊS - AVANÇADO</LanguageDetail>
        <LanguageDetail className="detail">ESPANHOL - BÁSICO</LanguageDetail>
        <LanguageDetail className="detail">
          JAPONÊS - BÁSICO (EM ESTUDO)
        </LanguageDetail>
      </PageContainer>
    </DetailsContainer>
  );
}

export default Languages;
