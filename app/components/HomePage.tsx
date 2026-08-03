import Header from './Header';
import BeforeAfterSlider from './before_after_slider_ai';
import ActiveSectionContextProvider from './context/active-section-context';
import Intro from './intro';
import Projects from './projects';
import SectionDivider from './section-divider';
import Services from './services';
import Contacts from './contacts';
import Pricing from './pricing';


export default function HomePage({children}: {children: React.ReactNode}) {
  return (
    <main className="flex flex-col items-center px-4">
      <ActiveSectionContextProvider>
        <Header />
        {children}
        {/* <BeforeAfterSlider/> */}
        <Intro />
     
        <Services />
        <Pricing />
        <Projects />
        <Contacts />
      </ActiveSectionContextProvider>
    </main>
  );
}
