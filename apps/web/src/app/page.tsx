import { getPeople } from '@repo/api/get-data';
import type { ICharacter } from '@repo/api/types';
import { Grid } from '../sections/grid';

export default async function Page(): Promise<JSX.Element> {
  const { results, count }: { results: ICharacter[]; count: number } = await getPeople();
  return <Grid people={results} totalCharacters={count} />;
}
