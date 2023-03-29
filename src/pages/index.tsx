import Head from 'next/head';
import { Inter } from '@next/font/google';
import Login from 'components/organisms/login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>さきちゃんタイマー</title>
        <meta name="description" content="愛するさきちゃんと会えるまでの寂しさを少しでも緩和するために作りました" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>雄斗くんからの挑戦状2</h1>
          <Login />
        </div>
      </main>
    </>
  );
}

const styles = {
  container: `
  w-screen
  h-screen
  pt-10
  text-center
  `,
  title: `
  mb-4
  `,
};
