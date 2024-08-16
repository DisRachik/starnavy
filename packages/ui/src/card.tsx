import Image from 'next/image';

interface CardProps {
  id: number;
  title: string;
  priority: boolean;
}

export function Card({ id, title, priority = false }: CardProps): JSX.Element {
  return (
    <div className='grid w-72 grid-flow-col grid-rows-2 items-center gap-4 text-red-400'>
      <Image
        alt={title}
        className='row-span-2 h-36 w-24 rounded-xl object-cover'
        height={150}
        priority={priority}
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        width={100}
      />
      <h3 className=' text-2xl'>{title}</h3>
      <p>Filmography</p>
    </div>
  );
}
