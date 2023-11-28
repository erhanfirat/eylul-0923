import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
        headers: {},
      });
};

export let AxiosInstance;

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
