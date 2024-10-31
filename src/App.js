import "./App.css";
import LoginForm from "./pages/Auth/LoginForm/LoginForm";
import GoldPrice from "./Components/GoldPrice";
import Register from "./pages/Auth/Register/Register";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/User/home/Home";

function App() {
  return (
    <div dir="rtl" className=" flex justify-center items-center flex-col bg-primary-gray">
      <BrowserRouter>
        <GoldPrice />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="user/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
