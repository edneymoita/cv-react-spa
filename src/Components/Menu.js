import React from "react";
import styled from "styled-components";
import Chevron from "./Chevron";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Initial from "./Initial";
import Profile from "./Profile";
import Formation from "./Formation";
import Skills from "./Skills";
import Languages from "./Languages";
import Experience from "./Experience";
import Training from "./Training";
import "../index";

const MenuPanel = styled.div`
  background-color: rgba(136, 14, 79, 0.7);
  color: #1f1f1f;
  font-weight: 600;
  text-align: left;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 3);
`;

function MenuItem(props) {
  return (
    <div className="MenuItem">
      <p>{props.title}</p>
      <Chevron fill={"#1f1f1f"} />
    </div>
  );
}

function Menu() {
  return (
    <>
      <HashRouter>
        <MenuPanel>
          <NavLink to="/">
            <MenuItem title="Início" />
          </NavLink>
          <NavLink to="/perfil">
            <MenuItem title="Perfil" />
          </NavLink>
          <NavLink to="/formacao">
            <MenuItem title="Formação" />
          </NavLink>
          <NavLink to="/habilidades">
            <MenuItem title="Habilidades" />
          </NavLink>
          <NavLink to="/idiomas">
            <MenuItem title="Idiomas" />
          </NavLink>
          <NavLink to="/experiencia">
            <MenuItem title="Experiência" />
          </NavLink>
          <NavLink to="/treinamentos-recentes">
            <MenuItem title="Treinamentos Recentes" />
          </NavLink>
        </MenuPanel>
        <div>
          <Routes>
            <Route exact path="/" element={<Initial />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/formacao" element={<Formation />} />
            <Route path="/habilidades" element={<Skills />} />
            <Route path="/idiomas" element={<Languages />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/treinamentos-recentes" element={<Training />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default Menu;
