import Header from './Header';
import Intro from './intro';
import Projects from './projects';
import SectionDivider from './section-divider';
import Services from './services';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider />
      <Services />
      <Projects />
      {/* build your real homepage here, piece by piece */}
    </main>
  );
}
