'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { getPeople } from '@repo/api/get-data';
import type { ICharacter, IMovies, IStarship } from '@repo/api/types';
import { useIntersectionObserver } from '@repo/hooks';
import { Card } from '@repo/ui/component';

type DataItem = ICharacter | IMovies | IStarship;

interface GridProps<T extends DataItem> {
  people: T[];
  totalCharacters: number;
}

export function Grid({ people, totalCharacters }: GridProps<DataItem>): JSX.Element {
  const [characters, setCharacters] = useState(people);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);

  const loadMoreCharacters = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const { results }: { results: ICharacter[] } = await getPeople(page);
      setCharacters(prev => [...prev, ...results]);
      setPage(prev => prev + 1);
    } catch (e) {
      throw new Error(`Error loading more characters: ${(e as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, page]);

  const { targetRef } = useIntersectionObserver({
    onIntersect: () => {
      void loadMoreCharacters();
    },
  });

  return (
    <section className='container py-24'>
      <ul className='flex flex-wrap justify-center gap-6'>
        {characters.map((item, index) => {
          const title =
            (item as ICharacter).name ||
            (item as IMovies).title ||
            `${(item as IStarship).model} | ${(item as IStarship).name}`;

          return (
            <li key={item.id}>
              <Link href='/'>
                <Card id={item.id} priority={index < 10} title={title} />
              </Link>
            </li>
          );
        })}
      </ul>
      {characters.length < totalCharacters ? <div ref={targetRef}>{isLoading ? 'Loading...' : null}</div> : null}
    </section>
  );
}
