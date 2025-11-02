import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("Siddhesh Kulkarni");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const texts = ["Siddhesh Kulkarni", "Full Stack Developer", "Problem Solver"];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[textIndex];

    if (!isDeleting && charIndex < currentFullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentFullText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex, texts]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden cursor-custom bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/hero-bg.avif')",
        filter: "opacity(0.9)",
      }}
    >

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div
        className="container mx-auto px-4 lg:px-8 pt-20 relative z-10 text-gray-900"
        style={{ color: "#111" }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-primary inline-block min-w-[280px] md:min-w-[400px] text-left">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          <p
            className="text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fade-in delay-200"
            style={{ color: "#111", fontWeight: 500 }}
          >
            6 months of experience building dynamic web applications with React, React Native, and PHP.
            Successfully completed internship at Codeworld Infotech, working on real-world projects.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8"
            >
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center animate-fade-in delay-500">
            <a
              href="https://github.com/siddhesh-kulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/70 border border-gray-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-900"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-kulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/70 border border-gray-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-900"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:siddheshsanjaykulkarni@gmail.com"
              className="w-12 h-12 rounded-full bg-white/70 border border-gray-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-900"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-primary/10 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-white transition-all"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
