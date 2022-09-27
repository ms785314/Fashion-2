import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
 return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="/home" element={<Banner></Banner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
