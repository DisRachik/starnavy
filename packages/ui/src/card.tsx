import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  id: number;
  title: string;
}

export function Card({ id, title }: CardProps): JSX.Element {
  return (
    <Link href='/'>
      <Image
        alt={title}
        height={100}
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        width={50}
      />
    </Link>
  );
}
