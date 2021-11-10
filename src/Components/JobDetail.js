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

const JobMore = styled.div`
  transition: 0.6s all;
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
          if (document.getElementById(`more_${props.id}`)) {
            document
              .getElementById(`more_${props.id}`)
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
      <JobMore className="hidden" id={`more_${props.id}`}>
        <JobCompany id={`company_${props.id}`}>
          {props.src ? (
            <img
              src={props.src}
              alt={props.alt}
              height={props.height}
              width="auto"
              className="logo"
            />
          ) : (
            <img src={work} alt="Trabalho" height="40px" width="auto" />
          )}
          <p>{props.company}</p>
        </JobCompany>
        {props.location !== "" ? (
          <JobLocation id={`location_${props.id}`}>
            {props.location}
          </JobLocation>
        ) : (
          ""
        )}
        <JobDescription id={`description_${props.id}`}>
          {props.children}
        </JobDescription>
      </JobMore>
    </div>
  );
}

export default JobDetail;
