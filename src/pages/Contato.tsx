import Layout from "@/components/Layout";
import { SectionReveal } from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  "Desenvolvimento de Sistemas",
  "Marketing Digital",
  "Cyber Security",
  "Automação Residencial",
  "Outro",
];

const ContatoPage = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", empresa: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", empresa: "", servico: "", mensagem: "" });
  };

  return (
    <Layout>
      <title>Contato | Nexus Tech - Solicite seu Orçamento</title>
      <meta name="description" content="Entre em contato com a Nexus Tech Solutions. Solicite um orçamento técnico para desenvolvimento de sistemas, marketing digital, cyber security ou automação residencial." />

      <section className="section-padding grid-bg">
        <div className="mx-auto max-w-4xl text-left">
          <SectionReveal>
            <span className="font-mono-label text-primary mb-4 block">Contato</span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos conversar sobre seu projeto
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Preencha o formulário abaixo ou entre em contato diretamente. Nossa equipe retornará em até 24 horas úteis com uma proposta personalizada.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nome *</label>
                      <input
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">E-mail *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Telefone</label>
                      <input
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Empresa</label>
                      <input
                        value={form.empresa}
                        onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Serviço de Interesse *</label>
                    <select
                      required
                      value={form.servico}
                      onChange={(e) => setForm({ ...form, servico: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mensagem *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none resize-none"
                      placeholder="Descreva seu projeto ou necessidade..."
                    />
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                    Enviar Mensagem
                  </Button>
                </form>
              </SectionReveal>
            </div>

            {/* Info */}
            <div>
              <SectionReveal delay={0.2}>
                <div className="space-y-6">
                  <div className="glass-card rounded-2xl p-6 border border-border/30">
                    <h3 className="font-semibold text-foreground mb-4">Informações de Contato</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">E-mail</p>
                          <p className="text-sm text-foreground">contato@nexustech.com.br</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Telefone</p>
                          <p className="text-sm text-foreground">(11) 9 9999-9999</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MessageCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">WhatsApp</p>
                          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                            Falar agora
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Endereço</p>
                          <p className="text-sm text-foreground">São Paulo, SP — Brasil</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card rounded-2xl p-6 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">Atendimento Rápido</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Prefere conversar diretamente? Fale com um especialista pelo WhatsApp.
                    </p>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      <Button variant="neon" size="lg" className="w-full">
                        <MessageCircle size={18} /> Falar no WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContatoPage;
