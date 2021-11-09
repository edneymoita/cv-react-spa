import React from "react";
import DetailsContainer from "./DetailsContainer";
import Info from "./Info";
import user from "../Images/user.svg";
import home from "../Images/home.svg";
import mail from "../Images/mail.svg";
import phone from "../Images/phone.svg";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github.svg";
import photo from "../Images/foto-perfil.jpg";

function Profile() {
  return (
    <DetailsContainer>
      <h3>Dados Pessoais</h3>
      <img className="avatar" src={photo} alt="Edney Moita" />
      <Info src={user} alt="Idade">
        27/10/1972 - SOLTEIRO
      </Info>
      <Info src={home} alt="Casa">
        SQS 413 BLOCO C APTO 104 BRASILIA DF - 70296-030
      </Info>
      <Info src={mail} alt="Email">
        <a href="mailto:edneymoita@gmail.com?subject=Testando">
          edneymoita@gmail.com
        </a>
      </Info>
      <Info src={phone} alt="Fone">
        (61) 98669-3548
      </Info>
      <Info src={linkedin} alt="LinkedIn">
        <a
          href="https://www.linkedin.com/in/edney-moita"
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com/in/edney-moita
        </a>
      </Info>
      <Info src={github} alt="GitHub">
        <a
          href="https://github.com/edneymoita"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/edneymoita
        </a>
      </Info>
    </DetailsContainer>
  );
}

export default Profile;
