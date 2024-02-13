import dynamic from 'next/dynamic'

const Title = dynamic(() => import('./components/title'), {
  ssr: false,
});

import Intro from "./components/about";
import Resume from './components/resume';

export default function Home() {
  return (
    <main>
      <Title />
      <Intro />
      <Resume />
    </main>
  );
}
