import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/owner/HomePage";
import AuthPage from "./pages/AuthPage";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
