import Link from 'next/link';
import { CustomLink } from '@repo/ui/custom-link';
import Image from 'next/image';
import { getData } from '@repo/api/get-data';

export default async function Page(): Promise<JSX.Element> {
  const data = await getData('/people/10');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <Link href='/about' legacyBehavior passHref>
          <CustomLink className='bg-red-500'>TO ABOUT</CustomLink>
        </Link>
        <CustomLink
          aria-label='...'
          href='/'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          TEST
        </CustomLink>
      </div>
      <Image
        alt={data.name}
        src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
        width={500}
        height={500}
      />
    </main>
  );
}
