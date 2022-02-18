import tw from 'twin.macro';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import { Button } from '@/components';

import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div tw='text-7'>The Quick Brown Fox</div>
        <div tw='text-6'>The Quick Brown Fox</div>
        <div tw='text-5'>The Quick Brown Fox</div>
        <div tw='text-4'>The Quick Brown Fox</div>
        <div tw='text-3'>The Quick Brown Fox</div>
        <div tw='text-2'>The Quick Brown Fox</div>
        <div tw='text-1'>The Quick Brown Fox</div>
        <div tw='text-0'>The Quick Brown Fox</div>
        <div tw='text--1'>The Quick Brown Fox</div>
        <div tw='text--2'>The Quick Brown Fox</div>
        <div tw='text--3'>The Quick Brown Fox</div>
      </main>
    </Layout>
  );
}
