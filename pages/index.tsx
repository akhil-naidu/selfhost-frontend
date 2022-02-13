import type { NextPage } from 'next';

import { Layout, Hero, Features, Pricing, Team } from '@/components/index';

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Features />
        <Team />
        <Pricing />
      </main>
    </Layout>
  );
};

export default Home;
