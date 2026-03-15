import Layout from "@/components/Layout";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Code, TrendingUp, Shield, Cpu, ArrowRight } from "lucide-react";
import { useState } from "react";

type Category = "todos" | "sistemas" | "marketing" | "security" | "automacao";

const categories: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "sistemas", label: "Sistemas e Portais" },
  { key: "marketing", label: "Marketing Digital" },
  { key: "security", label: "Cyber Security" },
  { key: "automacao", label: "Automação" },
];

const projects = [
  {
    category: "sistemas" as Category,
    icon: Code,
    title: "Portal de Gestão Logística",
    client: "LogisTech Brasil",
    description: "Plataforma completa para gerenciamento de frotas, rotas e entregas em tempo real com dashboards gerenciais e integração com ERPs.",
    tags: ["React", "Node.js", "PostgreSQL", "API REST"],
    results: ["40% de redução no tempo de entrega", "Dashboard em tempo real", "Integração com 3 ERPs"],
  },
  {
    category: "sistemas" as Category,
    icon: Code,
    title: "CRM Personalizado para Imobiliária",
    client: "Habitat Imóveis",
    description: "Sistema de CRM sob medida para gestão de leads, imóveis, visitas e contratos, com portal do cliente integrado.",
    tags: ["TypeScript", "React", "Supabase", "PWA"],
    results: ["3x mais conversões", "Portal de autoatendimento", "App mobile integrado"],
  },
  {
    category: "marketing" as Category,
    icon: TrendingUp,
    title: "Estratégia de Captação B2B",
    client: "TechSolutions Corp",
    description: "Planejamento e execução completa de funil de captação de leads B2B com tráfego pago, landing pages e automação de e-mail.",
    tags: ["Google Ads", "Meta Ads", "Landing Pages", "E-mail Marketing"],
    results: ["300% de aumento em leads", "CAC reduzido em 55%", "ROI de 8x em 6 meses"],
  },
  {
    category: "marketing" as Category,
    icon: TrendingUp,
    title: "Rebranding Digital E-commerce",
    client: "MegaStore Online",
    description: "Reestruturação completa da presença digital, SEO técnico, redes sociais e campanhas de performance para e-commerce de moda.",
    tags: ["SEO", "Social Media", "Google Shopping", "Analytics"],
    results: ["150% mais tráfego orgânico", "Primeiro lugar no Google", "2x em faturamento"],
  },
  {
    category: "security" as Category,
    icon: Shield,
    title: "Auditoria de Segurança Completa",
    client: "FinanceApp S/A",
    description: "Análise de vulnerabilidades, pentest e implementação de políticas de segurança para fintech com dados sensíveis de milhares de usuários.",
    tags: ["Pentest", "OWASP", "LGPD", "ISO 27001"],
    results: ["47 vulnerabilidades corrigidas", "Conformidade LGPD", "Zero incidentes em 12 meses"],
  },
  {
    category: "security" as Category,
    icon: Shield,
    title: "SOC e Monitoramento 24/7",
    client: "Hospital São Lucas",
    description: "Implantação de centro de operações de segurança com monitoramento contínuo, SIEM e resposta a incidentes para infraestrutura hospitalar.",
    tags: ["SIEM", "Firewall", "VPN", "Backup"],
    results: ["Monitoramento 24/7 ativo", "99.9% de uptime", "Recuperação em < 1h"],
  },
  {
    category: "automacao" as Category,
    icon: Cpu,
    title: "Casa Inteligente Premium",
    client: "Residência Família Silva",
    description: "Projeto completo de automação residencial com controle de iluminação, climatização, segurança e integração com assistentes virtuais.",
    tags: ["ESP32", "Home Assistant", "MQTT", "Alexa"],
    results: ["30% de economia de energia", "Controle por voz e app", "8 ambientes automatizados"],
  },
  {
    category: "automacao" as Category,
    icon: Cpu,
    title: "Automação de Estufa Agrícola",
    client: "AgroTech Cultivos",
    description: "Sistema IoT para monitoramento e controle automático de irrigação, temperatura e umidade em estufas de cultivo hidropônico.",
    tags: ["Arduino", "Sensores IoT", "Wi-Fi", "Dashboard"],
    results: ["25% mais produtividade", "Irrigação 100% automática", "Monitoramento remoto 24h"],
  },
];

const PortfolioPage = () => {
  const [active, setActive] = useState<Category>("todos");
  const filtered = active === "todos" ? projects : projects.filter(p => p.category === active);

  return (
    <Layout>
      <title>Portfólio de Projetos | Nexus Tech Solutions</title>
      <meta name="description" content="Conheça os projetos desenvolvidos pela Nexus Tech: sistemas sob medida, marketing digital, cyber security e automação residencial com microcontroladores." />

      <section className="section-padding grid-bg">
        <div className="mx-auto max-w-4xl text-left">
          <SectionReveal>
            <span className="font-mono-label text-primary mb-4 block">Portfólio</span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Projetos que geram resultados reais
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Cada projeto é uma parceria estratégica. Conheça alguns dos trabalhos que desenvolvemos e os resultados que entregamos para nossos clientes.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 border-b border-border/30">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    active === cat.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-6" key={active}>
            {filtered.map((project, i) => (
              <StaggerItem key={i}>
                <div className="glass-card-hover rounded-2xl border border-border/30 overflow-hidden h-full flex flex-col">
                  {/* Header with icon */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <project.icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{project.client}</p>
                          <h3 className="font-semibold text-foreground">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="font-mono-label px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-border/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mt-auto border-t border-border/20 p-6 bg-card/50">
                    <p className="font-mono-label text-primary mb-3">Resultados</p>
                    <ul className="space-y-1.5">
                      {project.results.map((result, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <ArrowRight size={12} className="text-primary flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-3xl text-center">
          <SectionReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Seu projeto pode ser o próximo
            </h2>
            <p className="text-muted-foreground mb-8">
              Conte-nos sobre suas necessidades e vamos criar uma solução sob medida para o seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contato"><Button variant="hero" size="lg">Solicitar Orçamento</Button></Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg">Falar no WhatsApp</Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
