import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./styles/index.scss";
import { MainLayout } from "./layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
