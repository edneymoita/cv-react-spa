import React from "react";
import styled from "styled-components";
import DetailsContainer from "./DetailsContainer";
import PageContainer from "./PageContainer";
import PageTitle from "./PageTitle";

const Presentation = styled.div`
  font-style: italic;
`;

function Initial() {
  return (
    <DetailsContainer>
      <PageTitle>Apresentação</PageTitle>
      <PageContainer>
        <Presentation>
          Analista de TI com 24 anos de experiência em diversos tipos empresas,
          desde pequeno porte até multinacionais, sempre trabalhando de forma
          sinérgica e comprometida com a equipe. Com perfil proativo, sempre
          procurou o equilíbrio entre trabalho e vida pessoal, não deixando de
          lado os compromissos assumidos nesses dois campos.
        </Presentation>
      </PageContainer>
    </DetailsContainer>
  );
}

export default Initial;
