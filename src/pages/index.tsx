import tw from 'twin.macro';
import Link from 'next/link';
import { PageWrapper } from '@/components';
import { styled } from '@/styles/stitches.config';

export default function HomePage() {
  return (
    <PageWrapper>
      <Link href={'monolith-reskin'}>
        <a>Monolith app reskin</a>
      </Link>
    </PageWrapper>
  );
}
