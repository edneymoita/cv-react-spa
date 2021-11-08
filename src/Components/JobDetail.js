import React from "react";
import styled from "styled-components";
import work from "../Images/work.png";

const JobTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #880e4f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  color: #880e4f;
`;

const JobCompany = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  text-align: right;
  font-size: 12px;
  color: #880e4f;
`;

const JobLocation = styled.p`
  margin: 5px;
  padding: 5px;
  text-align: right;
  font-size: 10px;
`;

const JobDescription = styled.div`
  text-align: justify;
  margin: 5px;
  padding: 5px;
  font-size: 12px;
`;

function JobDetail(props) {
  return (
    <div>
      <JobTitle>
        <span>{props.title}</span> <span>({props.dates})</span>
      </JobTitle>
      <JobCompany>
        {props.src ? (
          <img
            src={props.src}
            alt={props.alt}
            height={props.height}
            width="auto"
          />
        ) : (
          <img src={work} alt="Trabalho" height="40px" width="auto" />
        )}
        <span>{props.company}</span>
      </JobCompany>
      {props.location !== "" ? <JobLocation>{props.location}</JobLocation> : ""}
      <JobDescription>{props.children}</JobDescription>
    </div>
  );
}

export default JobDetail;
