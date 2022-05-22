import axios from 'axios';

export const request = async (config, callBack) => {
  const { url, params, restConfig } = config;
  const { data } = await axios.get(url, {
    baseURL: 'http://api.weatherapi.com/v1',
    headers: {
      key: 'fbc05fe6175042cc87d140639220505',
    },
    params: {
      lang: 'ru',
      ...params,
    },
    ...restConfig,
  });
  callBack(data);
};
