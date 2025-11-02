import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "React Native", "JavaScript", "HTML", "CSS", "Angular"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Backend",
      skills: ["PHP", "MySQL", "MongoDB", "Python"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 bg-card hover:shadow-card-hover transition-all duration-300 border-border"
              >
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} px-4 py-2 text-base font-medium hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-lg">
              Continuously learning and expanding my skill set to stay current with modern web development technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
