import type { NextPage } from 'next';
import { styled, darkTheme } from '@/styles/stitches.config';
import tw from 'twin.macro';
import { PageWrapper } from '@/components';

const ThemeTest: NextPage = () => {
  return (
    <PageWrapper>
      <div tw='text-green-12 bg-green-3'>Theme test, it works!</div>
    </PageWrapper>
  );
};

export default ThemeTest;
