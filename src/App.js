import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <HeaderMenu />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
