import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "lingueredev@gmail.com",
    href: "mailto:lingueredev@gmail.com",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 77 199 28 43",
    href: "tel:+221771992843",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Dakar, Sénégal",
    href: "#",
    color: "from-cyan-500 to-blue-500"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/AstouMba",
    color: "hover:bg-gray-800 hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/astou-mbow-655b62251",
    color: "hover:bg-blue-600 hover:text-white"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:lingueredev@gmail.com",
    color: "hover:bg-primary hover:text-primary-foreground"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contactez-moi
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter. Je serai ravie de discuter avec vous !
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.label}
                className="hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{method.label}</h3>
                    <a
                      href={method.href}
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {method.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Links */}
        <Card>
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Retrouvez-moi sur</h2>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      asChild
                      variant="outline"
                      size="lg"
                      className={`${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon className="mr-2 h-5 w-5" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Discutons de votre projet</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Je suis toujours ouverte à de nouvelles opportunités et collaborations. 
              Que ce soit pour un projet freelance, une mission ou simplement échanger 
              sur les technologies web, je serais ravie de vous répondre.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <a href="mailto:lingueredev@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Envoyer un Email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/astou-mbow-655b62251" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
