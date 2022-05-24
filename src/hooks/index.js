import { useEffect, useState } from 'react';
import { request } from '../api';

export const useRequest = (config, dep) => {
  const [state, setState] = useState();

  useEffect(() => {
    request(config, setState);
  }, [...dep]);

  return state;
};
