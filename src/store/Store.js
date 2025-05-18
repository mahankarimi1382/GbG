import Cookies from "js-cookie";
import { create } from "zustand";

export const tokenStore = create((set) => ({
  token: Cookies.get("token"),
  setToken: (token) => {
    console.log(token);
    set(() => ({ token: token }));
    Cookies.set("token", token);
  },
}));
