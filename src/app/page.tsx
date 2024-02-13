import dynamic from 'next/dynamic'

const Title = dynamic(() => import('./components/title'), {
  ssr: false,
});

import Intro from "./components/about";

export default function Home() {
  return (
    <main>
      <Title />
      <Intro />
    </main>
  );
}
