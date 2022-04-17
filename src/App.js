import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import FormPage from './screens/formPage/FormPage';
import HomePage from "./screens/home/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/form-page" element={<FormPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
