import { ICharacter } from '../types';
import { getData } from './get-data';

interface IPeople {
  count: number;
  results: ICharacter[];
}

export const getPeople = async (page: number = 1): Promise<IPeople> => {
  const { results, count } = await getData<IPeople>('/people', { params: { page } });
  return { results, count };
};
