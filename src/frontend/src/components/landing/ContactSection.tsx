import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send, ArrowUp } from 'lucide-react';

export function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only - no actual submission
    alert('This is a demo! In a real application, your message would be sent here.');
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-bold tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or want to learn more? We'd love to hear from you. 
          Fill out the form below and we'll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Email Us</CardTitle>
              <CardDescription>
                Send us an email anytime and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                <MessageSquare className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Live Chat</CardTitle>
              <CardDescription>
                Chat with our team in real-time for immediate assistance.
              </CardDescription>
            </CardHeader>
          </Card>

          <Button 
            variant="outline" 
            className="w-full gap-2"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more..." 
                  rows={6}
                  required 
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="gap-2 flex-1">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => scrollToSection('#features')}
                >
                  View Features
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
