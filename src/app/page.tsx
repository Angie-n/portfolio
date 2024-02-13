import styles from "./page.module.css";

import dynamic from 'next/dynamic'

const Title = dynamic(() => import('./components/title'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Title />
    </main>
  );
}
