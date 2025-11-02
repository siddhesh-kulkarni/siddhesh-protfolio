import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground text-lg">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card hover:shadow-card-hover transition-all duration-300 border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Email</h3>
              <p className="text-muted-foreground mb-4 break-all">
                siddheshsanjaykulkarni@gmail.com
              </p>
              <Button
                className="w-full bg-primary hover:bg-primary-hover"
                onClick={() => window.location.href = "mailto:siddheshsanjaykulkarni@gmail.com"}
              >
                Send Email
              </Button>
            </Card>

            <Card className="p-8 bg-card hover:shadow-card-hover transition-all duration-300 border-border">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">+91-7741973805</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=917741973805", "_blank")}
              >
                Send Message
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
