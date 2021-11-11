import { isMobile } from "react-device-detect";
import menu from "../Images/menu.png";
import styled from "styled-components";

const Menu = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  background-color: none;
  border: none;
`;

function StickyMenu() {
  return (
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
    </Menu>
  );
}

export default StickyMenu;
