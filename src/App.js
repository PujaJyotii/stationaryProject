import React, { useState } from "react";
import Header from "./UI/Header";
import { Route, Routes } from "react-router-dom";
import AddData from "./Pages/AddData";
import Information from "./Pages/Information";
import Cart from "./Cart/Cart";

function App() {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(true);
  };
  const HideHandler = () => {
    setShow(false);
  };
  return (
    <>
      {show && <Cart onShow={showHandler} onHide={HideHandler} />}
      <Header onShow={showHandler} />

      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </>
  );
}

export default App;
