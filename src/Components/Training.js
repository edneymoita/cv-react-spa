import React from "react";
import DetailsContainer from "./DetailsContainer";
import TrainingDetail from "./TrainingDetail";

function Training() {
  return (
    <DetailsContainer>
      <TrainingDetail
        title="DELOITTE TECH BOOTCAMP - SERVICENOW"
        dates="Março 2021"
        duration="8h"
      />
      <TrainingDetail
        title="DELOITTE TECH BOOTCAMP - SALESFORCE"
        dates="Março/Abril 2021"
        duration="56h"
      />
      <TrainingDetail
        title="HIRING CODERS (TREINAMENTO FULLSTACK) - VTEX / GAMA ACADEMY"
        dates="Junho/Julho/Agosto 2021"
        duration="11 semanas"
      >
        Disciplinas: HTML, CSS, Javascript, Typescript, React, Node.JS, GraphQL,
        Git/Github, Boas Práticas, Metodologia Ágil, DevOps, AWS, VTEX IO e soft
        skills.
      </TrainingDetail>
      <TrainingDetail
        title="IMERSÃO REACT (REACT, STYLED COMPONENTS E NEXT JS) - ALURA"
        dates="Julho 2021"
        duration="10h"
      />
      <TrainingDetail
        title="IMERSÃO DEV (JAVASCRIPT, HTML, CSS) - ALURA"
        dates="Setembro 2021"
        duration="20h"
      />
      <TrainingDetail
        title="MULTI-STACK (REACT, STYLED COMPONENTS , NEXT JS, REACT NATIVE - TREINAWEB"
        dates="Setembro 2021"
        duration="20h"
      />
      <TrainingDetail
        title="NEXTGEN BOOTCAMP PROV - SERVICENOW"
        dates="Outubro 2021"
        duration="30h"
      />
    </DetailsContainer>
  );
}

export default Training;
