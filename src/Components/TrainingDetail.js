import React from "react";
import styled from "styled-components";

const TrainingTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #880e4f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  color: #880e4f;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 650px) {
    font-size: 10px;
    margin: 5px;
    padding: 5px;
  }
`;

const TrainingDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 5px;
  text-align: right;
  font-size: 14px;

  @media (max-width: 650px) {
    font-size: 10px;
    margin: 5px;
    padding: 5px;
  }
`;

const TrainingDuration = styled.div`
  margin: 5px;
  padding: 5px;
  text-align: left;
  font-size: 12px;

  @media (max-width: 650px) {
    font-size: 10px;
    margin: 5px;
    padding: 5px;
  }
`;

const TrainingDescription = styled.div`
  text-align: justify;
  margin: 5px;
  padding: 5px;
  font-size: 12px;

  @media (max-width: 650px) {
    font-size: 10px;
    margin: 5px;
    padding: 5px;
  }
`;

function TrainingDetail(props) {
  return (
    <div>
      <TrainingTitle>{props.title}</TrainingTitle>
      <TrainingDate>{props.dates}</TrainingDate>
      <TrainingDuration>Carga horária: {props.duration}</TrainingDuration>
      <TrainingDescription>{props.children}</TrainingDescription>
    </div>
  );
}

export default TrainingDetail;
