import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "API Banking — Gestion de comptes bancaires et transactions",
    description: "Développement d'une API REST sécurisée pour la gestion des clients, comptes et transactions financières.",
    technologies: ["Laravel 10", "PostgreSQL 15", "Swagger", "Docker"],
    features: [
      "Gestion complète des comptes clients",
      "CRUD comptes avec validation d'identité",
      "Transactions sécurisées (dépôt, retrait, transfert)",
      "Middleware de sécurité et journalisation",
      "Notifications et API documentation"
    ],
    links: {
      demo: "#",
      github: "https://github.com/AstouMba/API-REST-Gestions-Comptes"
    }
  },
  {
    title: "MAXIT SA — Plateforme de transfert d'argent & gestion de comptes",
    description: "Interface et backend pour la gestion des comptes et transferts.",
    technologies: ["PHP Orienté Objet", "MVC", "MySQL/PostgreSQL", "Docker", "NGINX"],
    features: [
      "Gestion des comptes et transactions",
      "Administration des droits utilisateurs",
      "Notifications en temps réel"
    ],
    links: {
      demo: "#",
      github: "https://github.com/AstouMba/MaxitaPro"
    }
  },
  {
    title: "App WOYOFAL — Simulation d'achat de crédit d'électricité",
    description: "Gestion des achats de crédit et compteurs électriques.",
    technologies: ["PHP", "Lightweight MVC", "REST API"],
    features: [
      "Génération de codes recharge automatique",
      "Gestion clients et compteurs",
      "API REST avec journalisation"
    ],
    links: {
      demo: "#",
      github: "https://github.com/AstouMba/App-Woyofal"
    }
  },
  {
    title: "API AppDaf — Vérification d'identité client",
    description: "API pour récupérer automatiquement les informations clients depuis le NCI.",
    technologies: ["PHP OOP", "REST API", "JSON"],
    features: [
      "Intégration avec systèmes externes",
      "Récupération sécurisée des données",
      "Validation automatique"
    ],
    links: {
      demo: "#",
      github: "https://github.com/AstouMba/APPDAF"
    }
  },
  {
    title: "Gestion des Salaires — RH & Paie",
    description: "Application de gestion des employés, salaires et entreprises.",
    technologies: ["React", "MySQL/PostgreSQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Gestion RH et calculs salariaux",
      "Génération de fiches de paie PDF",
      "Suivi comptable intégré"
    ],
    links: {
      demo: "#",
      github: "https://github.com/AstouMba/Gestion-des-salaires"
    }
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez mes réalisations et projets significatifs
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Fonctionnalités principales</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button asChild variant="default" size="sm">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Démo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Vous avez un projet en tête ?</h3>
            <p className="text-muted-foreground">
              N'hésitez pas à me contacter pour discuter de vos besoins et de la façon dont je peux vous aider.
            </p>
            <Button asChild>
              <a href="/contact">Me Contacter</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
