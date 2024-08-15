import React from "react";
import Header from "./UI/Header";
import { Route, Routes } from "react-router-dom";
import AddData from "./Pages/AddData";
import Information from "./Pages/Information";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </>
  );
}

export default App;
