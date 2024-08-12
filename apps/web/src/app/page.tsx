import Link from 'next/link';
import { CustomLink, Grid } from '@repo/ui/component';
import { getPeople } from '@repo/api/get-data';

export default async function Page(): Promise<JSX.Element> {
  const data = await getPeople();
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
      <Grid data={data} />
    </main>
  );
}
