import React from "react";
import DetailsContainer from "./DetailsContainer";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import PageContainer from "./PageContainer";

const FormationYear = styled.p`
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

function Formation() {
  return (
    <DetailsContainer>
      <PageTitle>Formação</PageTitle>
      <PageContainer>
        <FormationYear>1995</FormationYear>
        <p>Bacharel em Ciência da Computação</p>
        <p>Universidade Federal de Campina Grande</p>
        <p>(antiga UFPB - Campus II)</p>
        <FormationYear>1997</FormationYear>
        <p>Certificate III in Business</p>
        <p>Russo Institute of Technology</p>
        <p>Brisbane, Queensland - Austrália</p>
      </PageContainer>
    </DetailsContainer>
  );
}

export default Formation;
