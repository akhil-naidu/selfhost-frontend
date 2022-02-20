import type { NextPage } from 'next';

import { Hero, Features, Pricing, Team, BlogCards } from '@/components/home/index';
import { Layout } from '@/components/layout/index';

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Features />
        <BlogCards />
        {/* <Team /> */}
        <Pricing />
      </main>
    </Layout>
  );
};

export default Home;
