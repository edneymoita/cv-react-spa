import React from "react";
import DetailsContainer from "./DetailsContainer";
import JobDetail from "./JobDetail";
import sistel from "../Images/sistel.png";
import tcs from "../Images/tcs.png";
import light_infocon from "../Images/light-infocon.png";
import yazigi from "../Images/yazigi.png";
import viaappia from "../Images/viaappia.png";
import foton from "../Images/foton.png";
import travel from "../Images/travel.png";
import encontre from "../Images/encontre.png";

function Experience() {
  return (
    <DetailsContainer>
      <JobDetail
        title="PROPRIETÁRIO AGÊNCIA DE TURISMO"
        dates="FEV 2019 - ATUAL"
        company="ENCONTRE SUA VIAGEM (FRANQUEADO)"
        location="BRASILIA - DF"
        src={encontre}
        height="30px"
        alt="Encontre Sua Viagem"
      >
        <p>
          - Planejar, comprar e gerenciar viagens de clientes interessados nos
          serviços de um agente de viagens com amplo conhecimento de diversos
          destinos turísticos no Brasil e no mundo.
        </p>
      </JobDetail>
      <JobDetail
        title="PERÍODO SABÁTICO"
        dates="JUL 2017 - JAN 2019"
        company="CASA / MUNDO"
        location=""
        src={travel}
        height="30px"
        alt="Mundo"
      >
        <p>
          Uma breve pausa para dedicação a família e a alguns projetos pessoais.
          Fiz viagens, conheci pessoas, países e culturas muito diferentes, que
          me fizeram ter uma visão mais abrangente do mundo. Como resultado tive
          meu blog de viagens montado.
        </p>
      </JobDetail>
      <JobDetail
        title="ANALISTA DE REQUISITOS | DESENVOLVEDOR"
        dates="OUT 2005 - JUL 2017"
        company="FUNDAÇÃO SISTEL DE SEGURIDADE SOCIAL"
        location="BRASÍLIA - DF"
        src={sistel}
        height="20px"
        alt="Sistel"
      >
        <p>
          - Dar manutenção em Centura SQLWindows no sistema interno de
          gerenciamento dos planos de previdência.
        </p>
        <p>
          - Participar ativamente como analista de requisitos do processo de
          especificação do novo sistema de assistência médica.
        </p>
        <p>
          - Análise de requisitos dos sistemas de previdência e de assistência
          médica.
        </p>
        <p>
          - Levantamento de requisitos juntos aos stakeholders para evoluções e
          correções.
        </p>
        <p>- Validação de cronograma de desenvolvimento.</p>
        <p>
          - Intermediação da comunicação entre a equipe solicitante e os
          desenvolvedores.
        </p>
        <p>- Acompanhamento entregas, homologação e aceite final.</p>
        <p>- Capacitação dos usuários nas ferramentas externa e interna.</p>
        <p>
          - Atender demandas de ajustes pontuais na base de dados, correções de
          situações urgentes não contempladas pelo novo sistema e geração de
          relatórios gerenciais, usando SQL (SYBASE e Sql Server).
        </p>
        <p>- Modelagem da base de dados em SQL.</p>
      </JobDetail>
      <JobDetail
        title="ANALISTA DE DESENVOLVIMENTO"
        dates="JUL 2005 - OUT 2005"
        company="FÓTON INFORMÁTICA"
        location="BRASILIA - DF"
        src={foton}
        height="25px"
        alt="Sistel"
      >
        <p>
          - Desenvolvedor C na manutenção de um sistema bancário, em ambiente
          UNIX.
        </p>
      </JobDetail>
      <JobDetail
        title="ANALISTA DE TI | DESENVOLVEDOR"
        dates="OUT 2004 - JUL 2005"
        company="TATA CONSULTANCY SERVICE (TCS)"
        location="BRASILIA - DF"
        src={tcs}
        height="25px"
        alt="Sistel"
      >
        <p>
          - Analista/Desenvolvedor de um software de distribuição de mídia de
          vídeos para a Globo.com, chamado “Globo Media Center Player – GMC
          Player”, usando Visual C++ e MFC.
        </p>
      </JobDetail>
      <JobDetail
        title="ANALISTA DE TI | DESENVOLVEDOR"
        dates="MAI 2003 - OUT 2004"
        company="INTELIGÊNCIA INFORMÁTICA"
        location="BRASILIA - DF"
      >
        <p>
          - Analista/Desenvolvedor de uma aplicação de segurança e controle
          acesso com Smart Cards (cartões com chip), biometria, assinatura
          digital e certificação digital, usando C++, com Microsoft Foundation
          Classes, Visual Basic e Delphi, nos bancos Oracle e SQLServer.
        </p>
      </JobDetail>
      <JobDetail
        title="ANALISTA DE TI | DESENVOLVEDOR | INSTRUTOR"
        dates="MAR 2002 - MAR 2003"
        company="SECRETARIA DE PREVIDÊNCIA SOCIAL - MPAS"
        location="BRASILIA - DF"
      >
        <p>
          - Atender demandas internas, desenvolvendo o Sistema Integrado de
          Informações Previdenciárias (SIPREV), em Delphi, ASP, C++, SQLServer e
          MySQL.
        </p>
        <p>- Dar treinamento em diversos locais pelo país.</p>
      </JobDetail>
    </DetailsContainer>
  );
}

export default Experience;
