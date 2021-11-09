import React from "react";
import styled from "styled-components";
import work from "../Images/job.png";
import "../index";
import Arrow from "./Arrow";

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
  background-color: #f1f1f1;

  @media (max-width: 650px) {
    font-size: 10px;
    margin: 5px;
    padding: 5px;
  }
`;

const JobCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 5px;
  text-align: center;
  font-size: 12px;
  color: #880e4f;

  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

const JobLocation = styled.p`
  margin: 5px;
  padding: 5px;
  text-align: right;
  font-size: 10px;
  font-style: italic;
  font-weight: bold;
`;

const JobDescription = styled.div`
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

function JobDetail(props) {
  return (
    <div>
      <JobTitle
        id={props.id}
        className="jobtitle"
        onClick={(e) => {
          if (document.getElementById(`company_${props.id}`)) {
            document
              .getElementById(`company_${props.id}`)
              .classList.toggle("hidden");
          }

          if (document.getElementById(`location_${props.id}`)) {
            document
              .getElementById(`location_${props.id}`)
              .classList.toggle("hidden");
          }

          if (document.getElementById(`description_${props.id}`)) {
            document
              .getElementById(`description_${props.id}`)
              .classList.toggle("hidden");
          }

          document
            .getElementById(`arrow_${props.id}`)
            .classList.toggle("rotate");
        }}
      >
        <span>{props.title}</span> <span>({props.dates})</span>
        <Arrow fill={"#1f1f1f"} id={`arrow_${props.id}`} />
      </JobTitle>
      <JobCompany className="hidden" id={`company_${props.id}`}>
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
        <p>{props.company}</p>
      </JobCompany>
      {props.location !== "" ? (
        <JobLocation className="hidden" id={`location_${props.id}`}>
          {props.location}
        </JobLocation>
      ) : (
        ""
      )}
      <JobDescription className="hidden" id={`description_${props.id}`}>
        {props.children}
      </JobDescription>
    </div>
  );
}

export default JobDetail;
