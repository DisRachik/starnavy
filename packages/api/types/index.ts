export type IEndpoint = '/people' | '/films' | '/starships';

export interface ICharacter {
  id: number;
  name: string;
  films: number[];
  starships: number[];
}

export interface IMovies {
  id: number;
  title: string;
  characters: number[];
  starships: number[];
}

export interface IStarship {
  id: number;
  name: string;
  model: string;
  films: number[];
  pilots: number[];
}
