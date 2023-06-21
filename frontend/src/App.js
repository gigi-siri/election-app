import { BrowserRouter } from "react-router-dom";
import MainApp from "./pages";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header title="Election Application" />
      <BrowserRouter basename="/">
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
