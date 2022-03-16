import tw from 'twin.macro';
import Layout from '@/components/layout/Layout';
import { Text } from 'connected-ui-edge';
import { MainNav } from '@/components';
import { styled } from '@/styles/stitches.config';

// @refresh reset

const textString = 'The quick brown fox';

export default function HomePage() {
  return (
    <Layout>
      <main>
        {/* hero */}
        <Text typeStyle='hero' tag='h1'>
          {textString}
        </Text>

        {/* headline */}
        <Text typeStyle='headline' tag='h2'>
          {textString}
        </Text>

        {/* title1 */}
        <Text typeStyle='title1' tag='h2'>
          {textString}
        </Text>

        {/* title2 */}
        <Text typeStyle='title2' tag='h2'>
          {textString}
        </Text>

        {/* title3 */}
        <Text typeStyle='title3' tag='h2'>
          {textString}
        </Text>

        {/* heading */}
        <Text typeStyle='heading' tag='h2'>
          {textString}
        </Text>

        {/* subhead */}
        <Text typeStyle='subhead' tag='h2'>
          {textString}
        </Text>

        {/* body */}
        <Text typeStyle='body' tag='h2'>
          {textString}
        </Text>

        {/* footnote */}
        <Text typeStyle='footnote' tag='h2'>
          {textString}
        </Text>

        {/* caption */}
        <Text typeStyle='caption' tag='h2'>
          {textString}
        </Text>

        {/* micro */}
        <Text typeStyle='micro' tag='h2'>
          {textString}
        </Text>
      </main>
    </Layout>
  );
}
