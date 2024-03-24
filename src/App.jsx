import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Pages/Home";
import Category from "./Pages/Category";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
