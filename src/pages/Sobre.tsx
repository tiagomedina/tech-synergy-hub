import Layout from "@/components/Layout";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Target, Eye, Heart, Shield, Lightbulb, Award, Users, Zap } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Inovação", desc: "Buscamos constantemente novas tecnologias e abordagens para entregar soluções de ponta." },
  { icon: Shield, title: "Segurança", desc: "A proteção dos dados e sistemas dos nossos clientes é inegociável." },
  { icon: Award, title: "Excelência", desc: "Cada projeto é tratado com o mais alto padrão de qualidade e atenção aos detalhes." },
  { icon: Users, title: "Parceria", desc: "Construímos relacionamentos duradouros baseados em confiança e resultados." },
  { icon: Zap, title: "Agilidade", desc: "Metodologias ágeis para entregas rápidas sem comprometer a qualidade." },
  { icon: Heart, title: "Compromisso", desc: "Nos dedicamos genuinamente ao sucesso de cada cliente e projeto." },
];

const SobrePage = () => (
  <Layout>
    <title>Sobre a Nexus Tech | Empresa de Tecnologia e Inovação</title>
    <meta name="description" content="Conheça a Nexus Tech Solutions: empresa especializada em desenvolvimento de sistemas, cyber security, marketing digital e automação residencial inteligente." />

    <section className="section-padding grid-bg">
      <div className="mx-auto max-w-4xl text-left">
        <SectionReveal>
          <span className="font-mono-label text-primary mb-4 block">Sobre Nós</span>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Engenharia de precisão para o mundo digital
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Somos uma empresa de tecnologia que acredita que a complexidade deve ser invisível e a performance, absoluta. Cada solução que entregamos é projetada para transformar operações e gerar resultados mensuráveis.
          </p>
        </SectionReveal>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <SectionReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>
                A Nexus Tech Solutions nasceu da visão de que empresas de todos os portes merecem acesso a tecnologia de ponta. Desde o início, nossa missão tem sido unir engenharia de precisão com visão estratégica de negócios.
              </p>
              <p>
                Ao longo dos anos, expandimos nossa atuação para quatro pilares fundamentais: desenvolvimento de sistemas, marketing digital, segurança cibernética e automação inteligente. Cada área fortalece as demais, criando um ecossistema completo de soluções.
              </p>
              <p>
                Hoje, atendemos empresas em todo o Brasil, com uma equipe multidisciplinar que combina expertise técnica profunda com capacidade de entender e resolver desafios de negócio reais.
              </p>
            </div>
          </SectionReveal>

          <div>
            <SectionReveal delay={0.1}>
              <div className="glass-card rounded-2xl p-6 border border-border/30 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Missão</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transformar operações empresariais através de soluções tecnológicas inteligentes, seguras e escaláveis.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="glass-card rounded-2xl p-6 border border-border/30 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Visão</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ser referência nacional em soluções tecnológicas integradas, reconhecida pela excelência técnica e impacto nos resultados dos clientes.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="glass-card rounded-2xl p-6 border border-border/30">
                <div className="flex items-center gap-3 mb-3">
                  <Heart size={20} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Valores</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inovação constante, segurança inegociável, excelência em cada entrega, parceria genuína e compromisso com resultados.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="font-mono-label text-primary mb-4 block">Nossos Valores</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">O que nos guia</h2>
        </SectionReveal>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <StaggerItem key={i}>
              <div className="glass-card-hover rounded-2xl p-6 border border-border/30 h-full">
                <v.icon size={24} className="text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </Layout>
);

export default SobrePage;
