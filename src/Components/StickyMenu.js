import { isMobile } from "react-device-detect";
import menu from "../Images/menu.png";
import styled from "styled-components";

const StickyBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 2;
  background-color: none;
  border: none;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuTitle = styled.span`
  padding-left: 5px;
  color: #f1f1f1;
  font-weight: 600;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 1);
  cursor: pointer;
`;

const ChangeMode = styled.input`
  background-color: #3d0522;
  color: #ffffff;
  margin-right: 2px;
  border-radius: 4px;
  height: 25px;
  min-width: 100px;
  z-index: 3;
  justify-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`;

function StickyMenu() {
  return (
    <StickyBar>
      <Menu
        onMouseEnter={
          !isMobile
            ? () => {
                document.getElementById("menuPanel").classList.add("show");
              }
            : false
        }
        onClick={() => {
          document.getElementById("menuPanel").classList.toggle("show");
        }}
      >
        <img className="menu" src={menu} alt="menu" />
        {!isMobile ? <MenuTitle>MENU</MenuTitle> : ""}
      </Menu>
      <ChangeMode
        type="button"
        value={"Modo escuro"}
        className="buttonMode"
        id="changeMode"
        onClick={() => {
          document.body.classList.toggle("darkMode");

          if (document.getElementById("changeMode").value === "Modo escuro")
            document.getElementById("changeMode").value = "Modo claro";
          else document.getElementById("changeMode").value = "Modo escuro";
        }}
      />
    </StickyBar>
  );
}

export default StickyMenu;
