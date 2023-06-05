import Axios from "axios";
import { createContext, useContext, useMemo } from "react";

export const AxiosContext = createContext(Axios);

export function AxiosProvider({ children }) {
  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.response.use(
      (response) => {
        return response;
      },

      async (error) => {
        return Promise.reject(error);
      }
    );

    return axios;
  }, []);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

export const useAxios = () => useContext(AxiosContext);
