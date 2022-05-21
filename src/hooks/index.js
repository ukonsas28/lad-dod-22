import { useEffect, useState } from "react";
import { request } from "../api";

export const useRequest = (config) => {
  const [state, setState] = useState();

  useEffect(() => {
    request(config, setState);
  }, [setState]);

  return state;
};
