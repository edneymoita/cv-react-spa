import React from "react";
import DetailsContainer from "./DetailsContainer";
import styled from "styled-components";

const FormationYear = styled.p`
  margin: 12px 30px;
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
      <h3>Formação</h3>
      <FormationYear>1995</FormationYear>
      <p>
        Bacharel em Ciência da Computação Universidade Federal de Campina Grande
        (antiga UFPB - Campus II)
      </p>
      <FormationYear>1997</FormationYear>
      <p>
        Certificate III in Business Russo Institute of Technology Brisbane,
        Queensland - Austrália
      </p>
    </DetailsContainer>
  );
}

export default Formation;
