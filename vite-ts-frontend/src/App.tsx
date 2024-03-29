import "./App.scss";
import MainView from "./Components/MainView";
import Menu from "./Components/Menu";
import { MenuProvider } from "./Providers/MenuContext";

function App() {
  return (
    <div className="app">
      <MenuProvider>
        <Menu
          message={"Nagisa Shibata 柴田の凪沙"}
          menuLinks={["profile", "gallery", "connect", "ooc"]}
        ></Menu>
        <MainView />
      </MenuProvider>
    </div>
  );
}

export default App;
