import "./App.css";
import TitleBanner from "./Components/TitleBanner";
import Menu from "./Components/Menu";
import Body from "./Components/Body";
import StickyMenu from "./Components/StickyMenu";

function App() {
  return (
    <div className="App">
      <StickyMenu />
      <TitleBanner />
      <Body className="formBody">
        <Menu />
      </Body>
    </div>
  );
}

export default App;
