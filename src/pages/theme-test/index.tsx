import type { NextPage } from 'next';
import { styled, darkTheme } from '@/styles/stitches.config';
import tw from 'twin.macro';
import Layout from '@/components/layout/Layout';

const ThemeTest: NextPage = () => {
  return (
    <Layout dark>
      <div tw='text-green-12 bg-green-3'>Theme test, it works!</div>
    </Layout>
  );
};

export default ThemeTest;
