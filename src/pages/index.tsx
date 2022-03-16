import tw from 'twin.macro';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { styled } from '@/styles/stitches.config';

// @refresh reset

const textString = 'The quick brown fox';

export default function HomePage() {
  return (
    <Layout>
      <Link href={'monolith-reskin'}>
        <a>Monolith app reskin</a>
      </Link>
    </Layout>
  );
}
