import type { ICharacter, IMovies, IStarship } from '@repo/api/types';
import { Card } from './card';

type DataItem = ICharacter | IMovies | IStarship;

interface GridProps<T extends DataItem> {
  data: T[];
}

export function Grid({ data }: GridProps<DataItem>): JSX.Element {
  return (
    <ul className='ui-flex ui-gap-4 ui-flex-wrap ui-justify-center'>
      {data.map(item => {
        const title =
          (item as ICharacter).name ||
          (item as IMovies).title ||
          `${(item as IStarship).model} | ${(item as IStarship).name}`;

        return (
          <li key={item.id}>
            <Card id={item.id} title={title} />
          </li>
        );
      })}
    </ul>
  );
}
