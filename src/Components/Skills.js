import React from "react";
import DetailsContainer from "./DetailsContainer";
import styled from "styled-components";
import PageTitle from "./PageTitle";
import PageContainer from "./PageContainer";

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillDetail = styled.p`
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

function Skills() {
  return (
    <DetailsContainer>
      <PageTitle>Habilidades</PageTitle>
      <PageContainer>
        <SkillList>
          <SkillDetail className="detail">C</SkillDetail>
          <SkillDetail className="detail">C++</SkillDetail>
          <SkillDetail className="detail">SQL</SkillDetail>
          <SkillDetail className="detail">DELPHI</SkillDetail>
          <SkillDetail className="detail">CENTURA</SkillDetail>
          <SkillDetail className="detail">SQLWINDOWS</SkillDetail>
          <SkillDetail className="detail">PREVIDÊNCIA PRIVADA</SkillDetail>
          <SkillDetail className="detail">TRELLO</SkillDetail>
          <SkillDetail className="detail">NOTION</SkillDetail>
          <SkillDetail className="detail">CANVA</SkillDetail>
          <SkillDetail className="detail">SLACK</SkillDetail>
          <SkillDetail className="detail">DISCORD</SkillDetail>
          <SkillDetail className="detail">JAVASCRIPT</SkillDetail>
          <SkillDetail className="detail">CSS</SkillDetail>
          <SkillDetail className="detail">HTML</SkillDetail>
          <SkillDetail className="detail">REACT</SkillDetail>
          <SkillDetail className="detail">NODE.JS</SkillDetail>
          <SkillDetail className="detail">TYPESCRIPT</SkillDetail>
          <SkillDetail className="detail">GRAPHQL</SkillDetail>
          <SkillDetail className="detail">GIT</SkillDetail>
          <SkillDetail className="detail">ÁGIL</SkillDetail>
          <SkillDetail className="detail">DEVOPS</SkillDetail>
        </SkillList>
      </PageContainer>
    </DetailsContainer>
  );
}

export default Skills;
