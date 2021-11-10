import "./App.css";
import TitleBanner from "./Components/TitleBanner";
import Menu from "./Components/Menu";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <TitleBanner />
      <Body className="formBody">
        <Menu />
      </Body>
    </div>
  );
}

export default App;
