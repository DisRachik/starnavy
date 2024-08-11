import axios from 'axios';

axios.defaults.baseURL = 'https://sw-api.starnavi.io';

export const getData = async (endpoint: string) => {
  try {
    const req = await axios.get(endpoint);
    return req.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return e.response?.statusText;
    }

    if (e instanceof Error) {
      return e.message;
    }

    throw new Error('Something went wrong!!!');
  }
};
