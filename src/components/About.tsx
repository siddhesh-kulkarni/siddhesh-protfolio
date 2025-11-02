import { Card } from "@/components/ui/card";
import { Briefcase, Trophy, FolderGit2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Experience",
      description: "6 months Internship as Fullstack Developer at Codeworld Infotech",
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "2nd at Dexter Infofest 2023-24 National Level Programming Competition",
    },
    {
      icon: FolderGit2,
      title: "Projects",
      description: "Completed 6+ projects during internship including HR dashboards and e-commerce platforms",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover:shadow-card-hover transition-all duration-300 border-border hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Background</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Motivated web developer with a successful internship in web development, seeking to 
              leverage my expertise in React, JavaScript, and React Native to contribute to innovative 
              projects and drive user engagement in a dynamic team environment. With hands-on experience 
              building HR dashboards, construction websites, and e-commerce platforms, I bring both 
              technical skills and creative problem-solving to every project.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;


// import aboutImage from "@/assets/about.jpg";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 py-20 bg-gray-50"
//     >
//       {/* Left Side – Image Box */}
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white p-2">
//           <img
//             src={aboutImage}
//             alt="About Siddhesh Kulkarni"
//             className="rounded-xl object-cover w-full h-[400px] lg:h-[500px] transition-transform duration-500 ease-in-out hover:scale-105"
//           />
//         </div>
//       </div>


//       {/* Right Side – Content */}
//       <div className="w-full lg:w-1/2 space-y-10 text-gray-800">
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//             About Me
//           </h2>
//           <p className="text-lg leading-relaxed">
//             I'm a passionate Full Stack Developer with hands-on experience in
//             building web and mobile applications using React, React Native, and
//             PHP. I love solving real-world problems and continuously learning
//             new technologies.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold mb-3 text-primary">Experience</h3>
//           <ul className="list-disc pl-5 space-y-2 text-gray-700">
//             <li>Full Stack Intern at Codeworld Infotech — 6 months</li>
//             <li>Worked on real-world projects involving React and PHP</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold mb-3 text-primary">Achievements</h3>
//           <ul className="list-disc pl-5 space-y-2 text-gray-700">
//             <li>Developed complete MERN-based web app during internship</li>
//             <li>Recognized for UI/UX improvements and API optimization</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold mb-3 text-primary">Projects</h3>
//           <ul className="list-disc pl-5 space-y-2 text-gray-700">
//             <li>Receiptor – Invoice management app built with React Native</li>
//             <li>Security Wala – Guard monitoring system built with PHP</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
