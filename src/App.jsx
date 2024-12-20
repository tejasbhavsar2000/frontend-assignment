import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home/homePage.jsx";

import SignIn from "./pages/signin/signInPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="dashboard" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
