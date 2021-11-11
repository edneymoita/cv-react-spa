import React from "react";
import styled from "styled-components";
import Mark from "./Mark";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Initial from "./Initial";
import Profile from "./Profile";
import Formation from "./Formation";
import Skills from "./Skills";
import Languages from "./Languages";
import Experience from "./Experience";
import Training from "./Training";
import "../index";
import menu from "../Images/menu.png";
import { isMobile } from "react-device-detect";

const MenuPanel = styled.aside`
  background-color: rgba(136, 14, 79, 0.9);
  color: #1f1f1f;
  font-weight: 600;
  text-align: left;
  padding: 30px 10px;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 3);
  height: 100%;
  z-index: 1;

  position: fixed;
  top: 0px;
  left: -370px;

  transition: 0.6s all;
`;

function MenuItem(props) {
  return (
    <div className="MenuItem">
      <p>{props.title}</p>
      <Mark fill={"#1f1f1f"} />
    </div>
  );
}

function Menu() {
  return (
    <>
      <HashRouter>
        <label
          htmlFor="toggle"
          onMouseEnter={
            !isMobile
              ? () => {
                  document.getElementById("toggle").checked = true;
                }
              : false
          }
        >
          <img className="menu" src={menu} alt="menu" />
        </label>
        <input type="checkbox" id="toggle" />
        <MenuPanel
          onClick={() => {
            document.getElementById("toggle").checked = false;
          }}
          onMouseLeave={
            !isMobile
              ? () => {
                  document.getElementById("toggle").checked = false;
                }
              : false
          }
        >
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
            <MenuItem title="Experiências Profissionais" />
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
