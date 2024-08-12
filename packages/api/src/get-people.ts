import { ICharacter } from '../types';
import { getData } from './get-data';

interface IPeople {
  results: ICharacter[];
}

export const getPeople = async (): Promise<ICharacter[]> => {
  const { results } = await getData<IPeople>('/people');
  return results;
};
