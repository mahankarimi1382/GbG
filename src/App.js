import "./App.css";
import LoginForm from "./pages/Auth/LoginForm/LoginForm";
import GoldPrice from "./Components/GoldPrice";
import Register from "./pages/Auth/Register/Register";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/User/home/Home";
import History from "./pages/User/profile/History/History";
import Services from "./pages/User/services/Services";
import Profile from "./pages/User/profile/Profile";
import Notifications from "./pages/User/notifications/Notifications";
import Wallet from "./pages/User/wallet/Wallet";

function App() {
  return (
    <div
      dir="rtl"
      className=" flex justify-center items-center flex-col bg-primary-gray"
    >
      <BrowserRouter>
        <GoldPrice />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="user/home" element={<Home />} />
          <Route path="user/profile/history" element={<History />} />
          <Route path="user/services" element={<Services />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/notifications" element={<Notifications />} />
          <Route path="user/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
