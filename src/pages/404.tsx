import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div>
            <RiAlarmWarningFill size={60} />
            <h1>Page Not Found</h1>
            <ArrowLink href='/'>Back to Home</ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
