import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/siddhesh-kulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-kulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="mailto:siddheshsanjaykulkarni@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Siddhesh Kulkarni. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
