import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const internshipProjects = [
    {
      title: "Codeworld HRM Dashboard",
      description: "HR Management Dashboard for employee management with attendance tracking and performance metrics",
      link: "https://hrm.codeworld.co.in/App/login",
      tags: ["React", "PHP", "MySQL"],
    },
    {
      title: "Shrushti Construction",
      description: "Professional landing page website for construction company showcasing services and projects",
      link: "https://demo.codeworld.co.in/shrushticonstruction/",
      tags: ["React", "CSS", "JavaScript"],
    },
    // {
    //   title: "Mascot Machinery",
    //   description: "E-commerce platform for machinery and equipment with product catalog and inquiry system",
    //   link: "https://demo.appgurukul.com/mascot2/App",
    //   tags: ["React", "PHP", "MySQL"],
    // },
    //{
    //   title: "Enviroo Ecommerce Dashboard",
    //   description: "Admin dashboard for e-commerce platform with order management and analytics",
    //   link: "https://envirooeco.com/Admin/App/index",
    //   tags: ["React", "PHP", "MySQL"],
    // },
    // {
    //   title: "Enviroo Eco Website",
    //   description: "E-commerce website for eco-friendly products with shopping cart and payment integration",
    //   link: "https://envirooeco.com/",
    //   tags: ["React", "PHP", "MySQL"],
    // },
    {
      title: "Soman Naravane Kulvrutant",
      description: "Family tree website with interactive genealogy visualization and member profiles",
      link: "https://somannaravanekulvrutant.com/App",
      tags: ["React", "PHP", "MySQL"],
    },
  ];

  const personalProjects = [
    {
      title: "E-Learning Platform",
      description: "Online learning platform with course management, student enrollment, and progress tracking",
      tags: ["PHP", "HTML", "CSS", "MySQL"],
    },
    {
      title: "Satellite Info App",
      description: "React Native mobile app for tracking satellite information with real-time data from API",
      tags: ["React Native", "PHP", "MySQL"],
    },
    {
      title: "E-commerce Website",
      description: "Full-stack e-commerce application with user authentication, product listings, and shopping cart",
      tags: ["React", "PHP", "MySQL"],
    },
    {
      title: "Satellite Tracker",
      description: "Web application for real-time satellite tracking with coordinate visualization",
      tags: ["React", "JavaScript", "API"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-foreground">Internship Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internshipProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-card-hover transition-all duration-300 border-border group"
                >
                  <h4 className="font-semibold text-lg mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-8 text-foreground">Personal Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:shadow-card-hover transition-all duration-300 border-border"
                >
                  <h4 className="font-semibold text-lg mb-3 text-card-foreground">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
