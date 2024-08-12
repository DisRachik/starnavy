import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { IEndpoint } from '../types';

axios.defaults.baseURL = 'https://sw-api.starnavi.io';

export const getData = async <T>(
  endpoint: IEndpoint,
  options: AxiosRequestConfig = {},
): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios.get(endpoint, options);
    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw new Error(e.response?.statusText);
    }

    if (e instanceof Error) {
      throw new Error(e.message);
    }

    throw new Error('Something went wrong!!!');
  }
};
