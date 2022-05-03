import tw from 'twin.macro';
import Link from 'next/link';
import { PageWrapper } from '@/components';
import { styled } from '@/styles/stitches.config';

// @refresh reset

const textString = 'The quick brown fox';

export default function HomePage() {
  return (
    <PageWrapper>
      <Link href={'monolith-reskin'}>
        <a>Monolith app reskin</a>
      </Link>
    </PageWrapper>
  );
}
