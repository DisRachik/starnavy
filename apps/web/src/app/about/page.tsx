import Link from 'next/link';
import { CustomLink } from '@repo/ui/custom-link';

export default function Page(): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <Link href='/' legacyBehavior passHref>
          <CustomLink className='bg-red-500'>TO HOME</CustomLink>
        </Link>
      </div>
    </main>
  );
}
