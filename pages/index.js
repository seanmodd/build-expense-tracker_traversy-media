import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import MyCounter from '../components/MyCounter';
import CounterContextProvider from '../context/CounterContext';

export default function Home() {
  return (
    <Layout>
      <MyCounter />
      <Link href="/traversy">Go to Traversy Example</Link>
    </Layout>
  );
}
