import React from "react";
import DetailsContainer from "./DetailsContainer";
import styled from "styled-components";

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
      <h3>Habilidades</h3>
      <SkillList>
        <SkillDetail>C</SkillDetail>
        <SkillDetail>C++</SkillDetail>
        <SkillDetail>SQL</SkillDetail>
        <SkillDetail>DELPHI</SkillDetail>
        <SkillDetail>CENTURA</SkillDetail>
        <SkillDetail>SQLWINDOWS</SkillDetail>
        <SkillDetail>PREVIDÊNCIA PRIVADA</SkillDetail>
        <SkillDetail>TRELLO</SkillDetail>
        <SkillDetail>NOTION</SkillDetail>
        <SkillDetail>CANVA</SkillDetail>
        <SkillDetail>SLACK</SkillDetail>
        <SkillDetail>DISCORD</SkillDetail>
        <SkillDetail>JAVASCRIPT</SkillDetail>
        <SkillDetail>CSS</SkillDetail>
        <SkillDetail>HTML</SkillDetail>
        <SkillDetail>REACT</SkillDetail>
        <SkillDetail>NODE.JS</SkillDetail>
        <SkillDetail>TYPESCRIPT</SkillDetail>
        <SkillDetail>GRAPHQL</SkillDetail>
        <SkillDetail>GIT</SkillDetail>
        <SkillDetail>ÁGIL</SkillDetail>
        <SkillDetail>DEVOPS</SkillDetail>
      </SkillList>
    </DetailsContainer>
  );
}

export default Skills;
