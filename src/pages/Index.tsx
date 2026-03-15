import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import ServiceCard from "@/components/ServiceCard";
import { Code, TrendingUp, Shield, Cpu, CheckCircle, Users, Zap, Headphones, Layers, Lightbulb, Search, Settings, TestTube, Rocket, LifeBuoy, Star, BarChart3, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Code, title: "Desenvolvimento de Sistemas e Portais", description: "Plataformas inteligentes sob medida para otimizar processos e impulsionar resultados.", href: "/sistemas" },
  { icon: TrendingUp, title: "Marketing Digital", description: "Estratégias orientadas a performance para atrair, converter e reter clientes.", href: "/marketing" },
  { icon: Shield, title: "Cyber Security", description: "Proteção de nível militar para seus sistemas, dados e infraestrutura digital.", href: "/cybersecurity" },
  { icon: Cpu, title: "Automação Residencial", description: "Projetos personalizados com microcontroladores para ambientes inteligentes e conectados.", href: "/automacao" },
];

const differentials = [
  { icon: Settings, text: "Soluções sob medida" },
  { icon: Users, text: "Equipe técnica especializada" },
  { icon: Shield, text: "Foco em segurança e performance" },
  { icon: Headphones, text: "Atendimento consultivo" },
  { icon: Layers, text: "Projetos escaláveis" },
  { icon: Lightbulb, text: "Inovação aplicada ao mundo real" },
];

const process = [
  { icon: Search, label: "01", title: "Diagnóstico", desc: "Análise profunda das necessidades e objetivos do seu negócio." },
  { icon: Layers, label: "02", title: "Planejamento", desc: "Definição de escopo, arquitetura e roadmap estratégico." },
  { icon: Code, label: "03", title: "Desenvolvimento", desc: "Implementação com metodologias ágeis e foco em qualidade." },
  { icon: TestTube, label: "04", title: "Testes e Validação", desc: "Garantia de qualidade com testes rigorosos e ajustes finos." },
  { icon: Rocket, label: "05", title: "Entrega e Suporte", desc: "Deploy seguro e suporte contínuo para evolução do projeto." },
];

const testimonials = [
  { name: "Carlos Mendes", role: "CTO, FinanceApp", text: "A Nexus Tech transformou nossa operação com um sistema sob medida que reduziu nossos custos operacionais em 40%." },
  { name: "Ana Rodrigues", role: "CEO, E-commerce Plus", text: "O trabalho de marketing digital superou nossas expectativas. Triplicamos nossa geração de leads em 6 meses." },
  { name: "Ricardo Santos", role: "Diretor de TI, LogisTech", text: "A auditoria de segurança revelou vulnerabilidades críticas que foram corrigidas rapidamente. Confiança total." },
];

const stats = [
  { value: "200+", label: "Projetos Entregues", icon: Award },
  { value: "98%", label: "Satisfação dos Clientes", icon: Star },
  { value: "24/7", label: "Suporte Técnico", icon: LifeBuoy },
  { value: "10+", label: "Anos de Experiência", icon: Clock },
];

const Index = () => {
  return (
    <Layout>
      {/* SEO */}
      <title>Nexus Tech | Desenvolvimento, Cyber Security e Automação Inteligente</title>
      <meta name="description" content="Transforme seu negócio com sistemas sob medida, marketing de performance e segurança digital de nível militar. Especialistas em automação com microcontroladores." />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center section-padding grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl w-full relative">
          <div className="max-w-3xl">
            <SectionReveal>
              <span className="font-mono-label text-primary mb-6 block">Nexus Tech Solutions</span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient leading-[1.1] mb-6">
                Soluções tecnológicas para desenvolver, proteger e automatizar o seu amanhã.
              </h1>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Da arquitetura de sistemas complexos à segurança cibernética e automação residencial inteligente. Unimos engenharia de precisão e marketing estratégico para escalar sua operação.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <Button variant="hero" size="xl">Solicitar Orçamento Técnico</Button>
                </Link>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero-outline" size="xl">Falar no WhatsApp</Button>
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <span className="font-mono-label text-primary mb-4 block">Sobre Nós</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Engenharia de precisão para negócios modernos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Nexus Tech Solutions é uma empresa de tecnologia especializada em criar soluções que transformam operações empresariais. Nossa abordagem combina expertise técnica profunda com visão estratégica de negócios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atuamos desde o desenvolvimento de sistemas complexos até a proteção cibernética avançada e automação inteligente, sempre com foco em resultados mensuráveis e inovação aplicada ao mundo real.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 border border-border/30 text-center">
                    <stat.icon size={24} className="text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <span className="font-mono-label text-primary mb-4 block">Serviços</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 max-w-xl">
              Soluções completas para cada desafio tecnológico
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <span className="font-mono-label text-primary mb-4 block">Diferenciais</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 max-w-xl">
              Por que escolher a Nexus Tech
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((d, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 glass-card rounded-xl p-5 border border-border/30">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <d.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-relaxed pt-2">{d.text}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <span className="font-mono-label text-primary mb-4 block">Processo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 max-w-xl">
              Como trabalhamos
            </h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 border border-border/30 h-full">
                  <span className="font-mono-label text-primary/60 block mb-3">{p.label}</span>
                  <p.icon size={24} className="text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <span className="font-mono-label text-primary mb-4 block">Depoimentos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 max-w-xl">
              O que nossos clientes dizem
            </h2>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-2xl p-6 border border-border/30 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">"{t.text}"</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-3xl text-center relative">
          <SectionReveal>
            <span className="font-mono-label text-primary mb-4 block">Próximo Passo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Pronto para transformar sua operação?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Converse com nossos especialistas e descubra como a tecnologia certa pode impulsionar seus resultados de forma mensurável e sustentável.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contato">
                <Button variant="hero" size="xl">Solicitar Orçamento Técnico</Button>
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="xl">Falar no WhatsApp</Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
