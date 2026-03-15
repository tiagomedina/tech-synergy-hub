import { ReactNode } from "react";
import { SectionReveal } from "./SectionReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServicePageHeroProps {
  label: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const ServicePageHero = ({ label, title, subtitle }: Omit<ServicePageHeroProps, 'children'>) => (
  <section className="section-padding grid-bg relative">
    <div className="mx-auto max-w-4xl text-left">
      <SectionReveal>
        <span className="font-mono-label text-primary mb-4 block">{label}</span>
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">{title}</h1>
      </SectionReveal>
      <SectionReveal delay={0.2}>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">{subtitle}</p>
      </SectionReveal>
      <SectionReveal delay={0.3}>
        <div className="flex flex-wrap gap-4">
          <Link to="/contato"><Button variant="hero" size="lg">Solicitar Orçamento</Button></Link>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg">Falar no WhatsApp</Button>
          </a>
        </div>
      </SectionReveal>
    </div>
  </section>
);

interface ServiceSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ServiceSection = ({ title, children, className = "" }: ServiceSectionProps) => (
  <section className={`section-padding ${className}`}>
    <div className="mx-auto max-w-6xl">
      <SectionReveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">{title}</h2>
      </SectionReveal>
      {children}
    </div>
  </section>
);

export const ServiceCTA = () => (
  <section className="section-padding bg-card">
    <div className="mx-auto max-w-3xl text-center">
      <SectionReveal>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Pronto para transformar sua operação?
        </h2>
        <p className="text-muted-foreground mb-8">
          Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com tecnologia de ponta.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contato"><Button variant="hero" size="lg">Solicitar Orçamento Técnico</Button></Link>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg">Falar no WhatsApp</Button>
          </a>
        </div>
      </SectionReveal>
    </div>
  </section>
);

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = ({ items }: { items: FAQItem[] }) => (
  <ServiceSection title="Perguntas Frequentes">
    <div className="space-y-4 max-w-3xl">
      {items.map((item, i) => (
        <SectionReveal key={i} delay={i * 0.05}>
          <details className="glass-card rounded-xl border border-border/30 group" open={i === 0}>
            <summary className="cursor-pointer p-5 font-medium text-foreground list-none flex items-center justify-between">
              {item.question}
              <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
            </summary>
            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.answer}</div>
          </details>
        </SectionReveal>
      ))}
    </div>
  </ServiceSection>
);
