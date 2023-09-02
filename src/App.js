import Main from "./Components/main";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/details";
import Error from "./Components/error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="movie/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
