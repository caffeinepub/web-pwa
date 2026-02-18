import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteLayout } from './components/layout/SiteLayout';
import { HeroSection } from './components/landing/HeroSection';
import { FeaturesSection } from './components/landing/FeaturesSection';
import { AboutSection } from './components/landing/AboutSection';
import { ContactSection } from './components/landing/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <SiteLayout>
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <ContactSection />
        </SiteLayout>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
