
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "Preview Request Submitted!",
      description: "We'll have your preview ready within 24-48 hours. Check your email for next steps.",
    });

    // Reset form
    setFormData({
      name: '',
      businessName: '',
      website: '',
      email: '',
      phone: ''
    });

    // Call success callback if provided (for popup)
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-slate-700 font-medium">Your Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 border-slate-300 focus:border-mint-500 focus:ring-mint-500"
            placeholder="John Smith"
          />
        </div>
        <div>
          <Label htmlFor="businessName" className="text-slate-700 font-medium">Business Name *</Label>
          <Input
            id="businessName"
            name="businessName"
            type="text"
            required
            value={formData.businessName}
            onChange={handleChange}
            className="mt-1 border-slate-300 focus:border-mint-500 focus:ring-mint-500"
            placeholder="Your Business LLC"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="website" className="text-slate-700 font-medium">Current Website</Label>
        <Input
          id="website"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
          className="mt-1 border-slate-300 focus:border-mint-500 focus:ring-mint-500"
          placeholder="https://yourbusiness.com"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 border-slate-300 focus:border-mint-500 focus:ring-mint-500"
            placeholder="john@yourbusiness.com"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 border-slate-300 focus:border-mint-500 focus:ring-mint-500"
            placeholder="(303) 555-0123"
          />
        </div>
      </div>

      <Button 
        type="submit"
        size="lg"
        className="w-full bg-mint-600 hover:bg-mint-700 text-white py-4 rounded-full text-lg font-semibold hover-scale"
      >
        Request a Free Site Preview
      </Button>
    </form>
  );
};

const ContactFormPopup = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
            Get Your Free Site Preview
          </DialogTitle>
          <p className="text-slate-600">
            See what your new website could look like in just 24-48 hours.
          </p>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm onSuccess={() => setOpen(false)} />
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Free preview • No commitment • Response within 24 hours
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-slate-200 bg-white shadow-2xl">
            <CardHeader className="text-center p-8 pb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Get Your Free Site Preview
              </h2>
              <p className="text-lg text-slate-600">
                See what your new website could look like in just 24-48 hours.
              </p>
            </CardHeader>
            <CardContent className="p-8 pt-2">
              <ContactForm />

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Free preview • No commitment • Response within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
export { ContactFormPopup };
