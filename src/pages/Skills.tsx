import { Code, Database, Layers, Palette, Server, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Langages de Programmation",
    icon: Code,
    skills: ["C", "C++", "C#", "Java", "Python", "PHP", "JavaScript", "TypeScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Développement Web",
    icon: Layers,
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "React.js", "Vue.js", "Laravel"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Outils & Environnements",
    icon: Wrench,
    skills: ["Git", "GitHub", "UML", "Figma", "Visual Studio Code", "PhpStorm", "IntelliJ IDEA", "PowerAMC", "PyCharm", "Android Studio", "Laragon", "Docker"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Bases de Données",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: ["Figma", "Canva", "Tailwind CSS", "Responsive Design"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Autres Compétences",
    icon: Server,
    skills: ["API REST", "Travail en équipe", "Adaptabilité", "Gestion du temps", "Curiosité technologique"],
    color: "from-indigo-500 to-blue-500"
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mes Compétences
          </h1>
          <p className="text-xl text-muted-foreground">
            Un aperçu de mes capacités techniques et transversales
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="hover:shadow-xl transition-all duration-300 animate-fadeIn group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <Card className="animate-fadeIn animation-delay-600 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Compétences Transversales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "Travail en équipe", level: 95 },
                { name: "Curiosité", level: 100 },
                { name: "Autonomie", level: 90 },
                { name: "Esprit d'analyse", level: 85 },
                { name: "Sens du détail", level: 90 },
                { name: "Communication claire", level: 88 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
