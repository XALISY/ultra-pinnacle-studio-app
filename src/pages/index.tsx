import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import StudioWorkspace from '../components/studio/StudioWorkspace';

const Home: NextPage = () => {
  return (
    <Layout>
      <StudioWorkspace />
    </Layout>
  );
};

export default Home;