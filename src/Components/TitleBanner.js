import React from "react";
import styled from "styled-components";
import qrcode from "../Images/Qrcode.jpg";

const url = "https://api.whatsapp.com/send?phone=5561986693548";

const BannerCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: #880e4f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 3);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    padding-top: 20px;
  }
`;

const SpaceRight = styled.div`
  align-self: end;
  justify-self: end;
  padding-bottom: 5px;
  padding-right: 5px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 3);
`;

const Square = styled.div`
  border: 1px solid #880e4f;
  border-radius: 4px;
  padding: 20px;
  align-items: end;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
`;

const Name = styled.h2`
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  color: #1c1c1c;

  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.div`
  font-style: italic;
  color: #1c1c1c;
  letter-spacing: 2px;
  text-align: center;
`;

const WhatsApp = styled.img`
  width: 60px;
`;

function TitleBanner() {
  return (
    <>
      <BannerCenter>
        <div></div>
        <Title>
          <Square>
            <Name>Edney Farias Moita</Name>
            <Subtitle>Analista de TI</Subtitle>
            <Subtitle>Desenvolvedor</Subtitle>
          </Square>
        </Title>
        <SpaceRight>
          <a href={url} target="_blank" rel="noreferrer">
            <WhatsApp src={qrcode} />
          </a>
        </SpaceRight>
      </BannerCenter>
    </>
  );
}

export default TitleBanner;
