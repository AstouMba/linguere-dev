import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Co-Fondatrice & Développeuse Full Stack",
    company: "Ecosys IT Services",
    location: "Sénégal",
    period: "2023 – En cours",
    website: "https://ecosys-it-tservice.vercel.app/index.html",
    description: "Co-fondation d'une startup spécialisée dans les solutions informatiques sur mesure pour entreprises et entrepreneurs. Pilotage complet des projets clients, de l'analyse des besoins jusqu'au déploiement en production.",
    achievements: [
      "Plus de 15 projets clients livrés avec succès",
      "Management et coordination d'une équipe de 3 développeurs",
      "Conception et développement de solutions complètes (UI/UX jusqu'au déploiement)",
      "Conseil technique et définition d'architectures adaptées",
      "Mise en place de pratiques DevOps pour des déploiements fiables",
      "Satisfaction client élevée avec retours positifs réguliers"
    ],
    technologies: ["Angular", "React", "Next.js", "Laravel", "Node.js", "Flutter", "Docker", "PostgreSQL", "MySQL"]
  },
  {
    title: "Développement Web et Mobile",
    company: "Sonatel Academy",
    location: "Dakar, Sénégal",
    period: "2024–2025",
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
    period: "2025",
    description: "Certification en gestion de projet avec Azure DevOps, incluant la planification, le suivi et la collaboration d'équipe.",
    achievements: [
      "Gestion de projets avec Azure Boards",
      "Planification et suivi des sprints",
      "Collaboration et communication d'équipe",
      "Automatisation des workflows"
    ]
  },
  {
    title: "Certificat Jenkins — Automatisation de pipelines de livraison",
    company: "Coursera",
    location: "En ligne",
    period: "2025",
    description: "Certification en automatisation des pipelines de livraison continue avec Jenkins.",
    achievements: [
      "Configuration de pipelines CI/CD",
      "Automatisation des tests et déploiements",
      "Intégration avec Git et autres outils",
      "Optimisation des processus de livraison"
    ]
  },
  {
    title: "Certificat Learn Object-Oriented Programming with PHP",
    company: "Coursera",
    location: "En ligne",
    period: "2025",
    description: "Apprentissage approfondi de la programmation orientée objet en PHP.",
    achievements: [
      "Maîtrise des concepts OOP en PHP",
      "Implémentation de classes et objets",
      "Héritage et polymorphisme",
      "Bonnes pratiques de développement"
    ]
  },
  {
    title: "Certificat Prompt Engineering Generative AI for Marketing Advertising",
    company: "Coursera",
    location: "En ligne",
    period: "2025",
    description: "Formation en ingénierie de prompts pour l'IA générative appliquée au marketing et à la publicité.",
    achievements: [
      "Création de prompts efficaces pour l'IA",
      "Applications en marketing digital",
      "Optimisation de contenu généré",
      "Stratégies d'IA en publicité"
    ]
  },
  {
    title: "Licence en Gestion et Économie",
    company: "UCAD",
    location: "Dakar, Sénégal",
    period: "2020–2022",
    description: "Formation universitaire en gestion et économie, développant des compétences en analyse économique et gestion d'entreprise.",
    achievements: [
      "Analyse économique et financière",
      "Gestion d'entreprise",
      "Économie internationale",
      "Projets de recherche"
    ]
  },
  {
    title: "Bac S2",
    company: "Lycée Cheikh Hamidou Kane, Mbao",
    location: "Dakar, Sénégal",
    period: "2019",
    description: "Baccalauréat série S2 (sciences expérimentales) avec mention.",
    achievements: [
      "Excellence en mathématiques et sciences",
      "Préparation aux études supérieures",
      "Développement de compétences analytiques",
      "Fondations solides en sciences"
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
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative animate-fadeIn ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot - Adjusted for mobile */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-6 md:top-8">
                  <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-primary border-3 md:border-4 border-background animate-glow" />
                </div>

                <Card className="ml-12 md:ml-0 hover:shadow-xl transition-all duration-300">
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
                      {exp.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-primary" />
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm"
                          >
                            Voir le site
                          </a>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
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
