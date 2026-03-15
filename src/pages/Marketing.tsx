import Layout from "@/components/Layout";
import { ServicePageHero, ServiceSection, ServiceCTA, FAQSection } from "@/components/ServicePage";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { TrendingUp, Search, Share2, Layout as LayoutIcon, Mail, BarChart3, FileText, Target, CheckCircle } from "lucide-react";

const solutions = [
  { icon: Target, title: "Gestão de Tráfego Pago", desc: "Campanhas otimizadas em Google Ads, Meta Ads e LinkedIn para máximo ROI." },
  { icon: Search, title: "SEO", desc: "Otimização para mecanismos de busca com estratégias técnicas e de conteúdo." },
  { icon: Share2, title: "Gestão de Redes Sociais", desc: "Presença estratégica nas redes que importam para o seu público-alvo." },
  { icon: LayoutIcon, title: "Landing Pages e Funis", desc: "Páginas de alta conversão projetadas para captar e qualificar leads." },
  { icon: Mail, title: "E-mail Marketing", desc: "Automações e campanhas segmentadas para nutrir e converter leads." },
  { icon: BarChart3, title: "Analytics e Relatórios", desc: "Dashboards de performance com métricas claras e insights acionáveis." },
];

const benefits = [
  "Aumento de tráfego qualificado",
  "Geração consistente de leads",
  "Redução de custo por aquisição",
  "Presença digital fortalecida",
  "Decisões baseadas em dados",
  "Integração entre marketing e tecnologia",
];

const faq = [
  { question: "Em quanto tempo vejo resultados?", answer: "Campanhas de tráfego pago geram resultados imediatos. SEO e estratégias orgânicas mostram resultados consistentes entre 3 a 6 meses." },
  { question: "Vocês trabalham com qual tipo de empresa?", answer: "Atendemos empresas de todos os portes, desde startups até grandes corporações, com estratégias personalizadas para cada segmento." },
  { question: "Como é feito o acompanhamento dos resultados?", answer: "Fornecemos relatórios mensais detalhados com métricas de performance, insights e recomendações estratégicas para otimização contínua." },
];

const MarketingPage = () => (
  <Layout>
    <title>Marketing Digital para Crescimento e Performance | Nexus Tech</title>
    <meta name="description" content="Aumente sua presença online, atraia clientes e transforme audiência em oportunidades reais com estratégias de marketing digital orientadas a resultados." />

    <ServicePageHero
      label="Marketing Digital"
      title="Marketing Digital para Crescimento e Performance"
      subtitle="Aumente sua presença online, atraia clientes e transforme audiência em oportunidades reais com estratégias orientadas a dados."
    />

    <ServiceSection title="Nossas Soluções de Marketing">
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-hover rounded-2xl p-6 border border-border/30 h-full">
              <s.icon size={24} className="text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ServiceSection>

    <ServiceSection title="Benefícios do Marketing Digital Estratégico" className="bg-card">
      <StaggerContainer className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {benefits.map((b, i) => (
          <StaggerItem key={i}>
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{b}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ServiceSection>

    <FAQSection items={faq} />
    <ServiceCTA />
  </Layout>
);

export default MarketingPage;
