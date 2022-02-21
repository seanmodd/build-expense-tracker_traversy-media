import Head from 'next/head';
import Layout from '../components/Layout';
import MyCounter from '../components/MyCounter';
import CounterContextProvider from '../context/CounterContext';

export default function Home() {
  return (
    <Layout>
      <MyCounter />
    </Layout>
  );
}
