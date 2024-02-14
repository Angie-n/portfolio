import dynamic from 'next/dynamic'

const Title = dynamic(() => import('./components/title'), {
  ssr: false,
});

import Intro from "./components/about";
import Resume from './components/resume';
import Projects from './components/projects';
import Socials from './components/socials';

export default function Home() {
  return (
    <main>
      <Title />
      <Intro />
      <Resume />
      <Projects />
      <Socials />
    </main>
  );
}
