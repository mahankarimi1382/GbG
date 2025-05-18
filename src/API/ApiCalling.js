import axios from "axios";
import { Eror, success } from "../utils/ToastAlert";

export const register = (data, navigate) => {
  console.log(data);
  axios
    .post("/api/v1/register", data)
    .then((res) => {
      console.log(res);
      success("ثبت نام با موفقیت انجام شد");
      navigate("/login");
    })
    .catch((err) => {
      console.log(err);
      Eror();
    });
};
export const login = (data, navigate, setToken) => {
  console.log(data);
  axios
    .post("/api/v1/login", data)
    .then((res) => {
      console.log(res);
      success("خوش آمدید");
      setToken(res.data.token);
      navigate("/user/home");
    })
    .catch((err) => {
      console.log(err);
      Eror();
    });
};
export const get_balance = async (token) => {
  console.log(token);
  try {
    const response = await axios.get("/api/v1/balance", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = response.data.balance;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching:", error);
    return null;
  }
};
export const get_Profile = async (token) => {
  console.log(token);
  try {
    const response = await axios.get("/api/v1/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching:", error);
    return null;
  }
};
