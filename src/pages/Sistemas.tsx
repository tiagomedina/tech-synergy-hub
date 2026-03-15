import Layout from "@/components/Layout";
import { ServicePageHero, ServiceSection, ServiceCTA, FAQSection } from "@/components/ServicePage";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Code, Database, LayoutDashboard, Link2, Users, Globe, CheckCircle } from "lucide-react";

const solutions = [
  { icon: Code, title: "Sistemas Web Sob Medida", desc: "Aplicações robustas e escaláveis para automatizar e otimizar seus processos internos." },
  { icon: Globe, title: "Portais Corporativos", desc: "Plataformas centralizadas para comunicação, gestão e colaboração empresarial." },
  { icon: LayoutDashboard, title: "Dashboards e Painéis Gerenciais", desc: "Visualização de dados em tempo real para tomada de decisão estratégica." },
  { icon: Link2, title: "Integrações com APIs", desc: "Conecte seus sistemas existentes para um fluxo de dados unificado e eficiente." },
  { icon: Database, title: "CRM, ERP e Sistemas Internos", desc: "Soluções personalizadas de gestão que se adaptam ao seu modelo de negócio." },
  { icon: Users, title: "Portais de Clientes e Fornecedores", desc: "Ambientes seguros para interação e autoatendimento de seus parceiros." },
];

const benefits = [
  "Redução de custos operacionais",
  "Automação de processos manuais",
  "Maior controle e visibilidade da operação",
  "Escalabilidade para crescimento",
  "Integração entre departamentos",
  "Segurança de dados corporativos",
];

const faq = [
  { question: "Quanto tempo leva para desenvolver um sistema?", answer: "O prazo depende da complexidade do projeto. Sistemas simples podem levar de 4 a 8 semanas, enquanto plataformas mais complexas podem levar de 3 a 6 meses. Realizamos um diagnóstico inicial para estimar prazos realistas." },
  { question: "Quais tecnologias vocês utilizam?", answer: "Trabalhamos com um stack moderno que inclui React, TypeScript, Node.js, Python, bancos de dados SQL e NoSQL, além de infraestrutura em nuvem (AWS, GCP, Azure)." },
  { question: "Vocês oferecem suporte após a entrega?", answer: "Sim. Oferecemos planos de suporte e manutenção contínua para garantir que seu sistema evolua junto com o seu negócio." },
  { question: "É possível integrar com sistemas já existentes?", answer: "Sim, desenvolvemos APIs e conectores para integrar nossos sistemas com ERPs, CRMs e qualquer plataforma que sua empresa já utilize." },
];

const SistemasPage = () => (
  <Layout>
    <title>Desenvolvimento de Sistemas e Portais | Nexus Tech</title>
    <meta name="description" content="Criamos plataformas inteligentes sob medida para otimizar processos, integrar operações e impulsionar resultados. Sistemas web, portais, dashboards e integrações." />

    <ServicePageHero
      label="Desenvolvimento de Software"
      title="Desenvolvimento de Sistemas e Portais Sob Medida"
      subtitle="Criamos plataformas inteligentes para otimizar processos, integrar operações e impulsionar resultados com tecnologia de ponta."
    />

    <ServiceSection title="Soluções que Oferecemos">
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

    <ServiceSection title="Benefícios para sua Empresa" className="bg-card">
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

export default SistemasPage;
