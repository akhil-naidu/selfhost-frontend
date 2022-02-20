import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { Hero, Features, Pricing, Team, BlogCards } from '@/components/home';

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
