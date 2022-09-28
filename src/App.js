import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [addedItems, setAddedItems] = useState([]);
  const addToCart = (addedItem) => {
    // console.log(id);
    setAddedItems([...addedItems,addedItem])
    // console.log(addedItems);
  }

  return (
    <div className="App">
      <Header addedItems={addedItems.length}></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="/home" element={<Banner></Banner>}></Route>
        <Route path="/shop" element={<Products addToCart={addToCart}></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
