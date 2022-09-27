import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
 return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element></Route>
      </Routes>
    </div>
  );
}

export default App;
