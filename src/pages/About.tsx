import { Award, BookOpen, Heart, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            À Propos de Moi
          </h1>
          <p className="text-xl text-muted-foreground">
            Découvrez mon parcours et mes passions
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="/CV_ASTOUMBOW_FR.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Télécharger CV (FR)
            </a>
            <a
              href="/CV_ASTOUMBOW_EN.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Download CV (EN)
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Ma Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Développeuse web & mobile rigoureuse et créative, je suis capable de concevoir 
                des applications modernes, performantes et responsives. À l'aise côté front-end 
                et back-end, je transforme les idées en produits concrets grâce à des technologies 
                actuelles : JavaScript, PHP, Laravel, React, TailwindCSS, Docker.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Curieuse, autonome et collaborative, je m'investis pleinement dans chaque projet 
                avec un souci constant de la qualité et de l'innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Mes Valeurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="font-semibold">Excellence :</span>
                    <span className="text-muted-foreground"> Je vise toujours la meilleure qualité dans mes réalisations</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="font-semibold">Innovation :</span>
                    <span className="text-muted-foreground"> Toujours à l'affût des dernières technologies</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="font-semibold">Collaboration :</span>
                    <span className="text-muted-foreground"> Le travail d'équipe est essentiel à ma réussite</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <span className="font-semibold">Apprentissage :</span>
                    <span className="text-muted-foreground"> Une curiosité constante pour progresser</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Développement Web et Mobile</h3>
                <p className="text-sm text-primary">Sonatel Academy, Dakar</p>
                <p className="text-sm text-muted-foreground">2024–2025</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Certificat Azure DevOps Boards</h3>
                <p className="text-sm text-primary">Coursera</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Certificat Jenkins — Automatisation de pipelines de livraison</h3>
                <p className="text-sm text-primary">Coursera</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Certificat Learn Object-Oriented Programming with PHP</h3>
                <p className="text-sm text-primary">Coursera</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Certificat Prompt Engineering Generative AI for Marketing Advertising</h3>
                <p className="text-sm text-primary">Coursera</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Licence en Gestion et Économie</h3>
                <p className="text-sm text-primary">UCAD, Dakar</p>
                <p className="text-sm text-muted-foreground">2020–2022</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Bac S2</h3>
                <p className="text-sm text-primary">Lycée Cheikh Hamidou Kane, Mbao</p>
                <p className="text-sm text-muted-foreground">2019</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Langues
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Wolof</span>
                    <span className="text-sm text-muted-foreground">Native</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Français</span>
                    <span className="text-sm text-muted-foreground">Courant</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-[95%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Anglais</span>
                    <span className="text-sm text-muted-foreground">Intermédiaire B1</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-[70%]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
