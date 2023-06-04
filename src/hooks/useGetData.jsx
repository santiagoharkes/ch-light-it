import { useQuery } from "react-query";
import { useAxios } from "./useAxios";

function useGetData(endpoint) {
  const axios = useAxios();

  const getData = async () => {
    const { data } = await axios.get(`/${endpoint}`);
    return data;
  };

  const data = useQuery([endpoint], () => getData(), {
    staleTime: 60 * 1000 * 5,
    enabled: !!endpoint,
  });

  return { data, getData };
}

export default useGetData;
