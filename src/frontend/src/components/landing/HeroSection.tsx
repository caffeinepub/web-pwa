import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium bg-muted/50">
          <Sparkles className="h-4 w-4 mr-2 text-primary" />
          Live Interactive Demo
        </div>
        
        <h1 className="max-w-4xl font-bold tracking-tight">
          Experience Modern Web
          <span className="block text-primary mt-2">Design & Development</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          A fully clickable demonstration showcasing responsive design, smooth interactions, 
          and cutting-edge web technologies. Explore every section and experience seamless navigation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            size="lg" 
            className="gap-2 shadow-soft hover:shadow-glow transition-all"
            onClick={() => scrollToSection('#features')}
          >
            Explore Features
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2"
            onClick={() => scrollToSection('#contact')}
          >
            Get in Touch
          </Button>
        </div>
        
        <div className="pt-8 grid grid-cols-3 gap-8 md:gap-12 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Responsive</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">Fast</div>
            <div className="text-sm text-muted-foreground mt-1">Performance</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">Modern</div>
            <div className="text-sm text-muted-foreground mt-1">Technology</div>
          </div>
        </div>
      </div>
    </section>
  );
}
