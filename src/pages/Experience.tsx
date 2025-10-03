import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Développeuse Web & Mobile",
    company: "Sonatel Academy",
    location: "Dakar, Sénégal",
    period: "Février 2025 - En cours",
    description: "Formation intensive en développement web et mobile avec acquisition de compétences en JavaScript, React, PHP, Laravel et développement d'applications responsive.",
    achievements: [
      "Développement d'applications web modernes avec React et TypeScript",
      "Création d'APIs REST avec Node.js et Express",
      "Maîtrise de Git et des pratiques DevOps",
      "Réalisation de projets en équipe suivant la méthodologie Agile"
    ]
  },
  {
    title: "Certificat Azure DevOps Boards",
    company: "Coursera",
    location: "En ligne",
    period: "Mai 2025",
    description: "Certification en gestion de projet avec Azure DevOps, incluant la planification, le suivi et la collaboration d'équipe.",
    achievements: [
      "Gestion de projets avec Azure Boards",
      "Planification et suivi des sprints",
      "Collaboration et communication d'équipe",
      "Automatisation des workflows"
    ]
  },
  {
    title: "Formation Marketing Digital",
    company: "ForceN",
    location: "Dakar, Sénégal",
    period: "Novembre 2024",
    description: "Formation complète en marketing digital couvrant les stratégies en ligne, les réseaux sociaux et l'analyse de données.",
    achievements: [
      "Stratégies de marketing digital",
      "Gestion des réseaux sociaux",
      "SEO et référencement web",
      "Analyse de performance et ROI"
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Expérience & Formation
          </h1>
          <p className="text-xl text-muted-foreground">
            Mon parcours professionnel et mes formations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative animate-fadeIn ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                  <div className="h-4 w-4 rounded-full bg-primary border-4 border-background animate-glow" />
                </div>

                <Card className="ml-8 md:ml-0 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Réalisations & Compétences</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
