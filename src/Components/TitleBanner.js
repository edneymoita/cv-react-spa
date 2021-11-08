import React from "react";
import styled from "styled-components";
import qrcode from "../Images/Qrcode.jpg";

const BannerCenter = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr 130px;
  background-color: #880e4f;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 3);
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
  background-color: #fcfcfc;
`;

const Square = styled.div`
  border: 1px solid #0c0c0c;
  padding: 20px;
  align-items: end;
`;

const Name = styled.h2`
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
  color: #1c1c1c;
`;

const Subtitle = styled.p`
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
            <Subtitle>Analista de TI | Desenvolvedor</Subtitle>
          </Square>
        </Title>
        <SpaceRight>
          <WhatsApp src={qrcode} />
        </SpaceRight>
      </BannerCenter>
    </>
  );
}

export default TitleBanner;
