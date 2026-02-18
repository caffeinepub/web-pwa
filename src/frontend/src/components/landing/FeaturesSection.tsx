import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Layout, Zap, Shield, Smartphone, Code } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Carefully crafted with attention to detail, using modern design principles and aesthetics.',
  },
  {
    icon: Layout,
    title: 'Responsive Layout',
    description: 'Perfectly adapts to any screen size, from mobile phones to large desktop displays.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with instant loading and smooth, fluid interactions.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and modern web standards for peace of mind.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Designed with mobile users in mind, ensuring great experiences on all devices.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Well-structured, maintainable codebase following industry best practices.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-bold tracking-tight">
          Powerful Features
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need for a modern web experience, built with the latest technologies and best practices.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-soft"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
