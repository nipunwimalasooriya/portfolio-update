import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import  emailjs  from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Make sure the formRef is valid and send the email using emailjs
    if (formRef.current) {
      emailjs.sendForm(
        'service_f5j54um', 
        'template_fl3akfl', 
        formRef.current,
        'oIFpnFM1MOhbGuWNk' 
      )
      .then((result) => {
        console.log(result.text);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      }, (error) => {
        console.log(error.text);
        toast({
          title: "Message failed!",
          description: error.text,
        });
      });

      setFormState({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-element");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a question or want to work together? Drop me a message and I'll get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <div className="glass-dark p-6 rounded-xl space-y-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:contact@example.com" className="font-medium hover:text-primary transition-colors">
                    nipunrukshitha531@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="font-medium hover:text-primary transition-colors">
                    +94 77 550 5007
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Barandana, Kurunegala, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-dark rounded-xl overflow-hidden h-[200px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d831.5711105810855!2d80.43562099626122!3d7.504811422960295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1741862455722!5m2!1sen!2slk"
                className="w-full h-full object-cover border-none"
                title="Location Map"
                allowFullScreen
                loading="lazy"
              />
            </div>

          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-xl animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-background/50"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-primary hover:bg-primary/90 text-white gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
