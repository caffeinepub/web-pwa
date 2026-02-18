import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, ArrowRight } from 'lucide-react';

export function AboutSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Creating exceptional web experiences that delight users and drive results.',
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Every decision is made with the end user in mind, ensuring intuitive experiences.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Embracing cutting-edge technologies to build the future of the web.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-bold tracking-tight">
          About This Demo
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of modern web development capabilities, demonstrating what's possible 
          with today's technologies and thoughtful design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold">
            Built for the Modern Web
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            This interactive demo showcases the power of modern web technologies including 
            React, TypeScript, and Tailwind CSS. Every element is carefully crafted to 
            provide a seamless, engaging experience across all devices.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From smooth animations to responsive layouts, this demo represents the 
            current state of web development best practices. It's fully interactive—click 
            around, explore the sections, and see how everything works together harmoniously.
          </p>
          <Button 
            className="gap-2"
            onClick={() => scrollToSection('#contact')}
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
