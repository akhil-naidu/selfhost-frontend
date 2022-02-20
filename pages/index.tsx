import type { NextPage } from 'next';

import { Layout, Hero, Features, Pricing, Team, BlogCards } from '@/components/index';

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
