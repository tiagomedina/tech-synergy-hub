import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Sistemas e Portais", path: "/sistemas" },
  { label: "Marketing Digital", path: "/marketing" },
  { label: "Cyber Security", path: "/cybersecurity" },
  { label: "Automação Residencial", path: "/automacao" },
  { label: "Portfólio", path: "/portfolio" },
  { label: "Sobre a Empresa", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-card">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">N</div>
            <span className="text-lg font-bold text-foreground">Nexus Tech</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Soluções tecnológicas para desenvolver, proteger e automatizar o seu negócio. Engenharia de precisão e inovação aplicada.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Links Rápidos</h4>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Contato</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} className="text-primary" />
              contato@nexustech.com.br
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} className="text-primary" />
              (11) 9 9999-9999
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle size={14} className="text-primary" />
              WhatsApp
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
          <ul className="space-y-2">
            <li><span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">Política de Privacidade</span></li>
            <li><span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">LGPD</span></li>
            <li><span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">Termos de Uso</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nexus Tech Solutions. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
