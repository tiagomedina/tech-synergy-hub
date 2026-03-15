import Layout from "@/components/Layout";
import { ServicePageHero, ServiceSection, ServiceCTA, FAQSection } from "@/components/ServicePage";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Shield, Search, Lock, Eye, Database, Wifi, Globe, FileCheck, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const solutions = [
  { icon: Search, title: "Análise de Vulnerabilidades", desc: "Identificação proativa de falhas de segurança antes que sejam exploradas." },
  { icon: AlertTriangle, title: "Pentest", desc: "Testes de intrusão simulados para avaliar a resiliência dos seus sistemas." },
  { icon: Eye, title: "Monitoramento e Proteção", desc: "Vigilância contínua de ameaças com resposta rápida a incidentes." },
  { icon: Lock, title: "Gestão de Acesso e Identidade", desc: "Controle granular de permissões e autenticação multifator." },
  { icon: Database, title: "Backup e Recuperação", desc: "Estratégias de backup e planos de recuperação de desastres." },
  { icon: Wifi, title: "Segurança de Redes", desc: "Firewall, VPN e segmentação de rede para proteção perimetral." },
  { icon: Globe, title: "Segurança para Aplicações Web", desc: "Proteção contra ataques OWASP, injeção SQL e XSS." },
  { icon: FileCheck, title: "Adequação à LGPD", desc: "Consultoria para conformidade com a Lei Geral de Proteção de Dados." },
];

const risks = [
  { icon: XCircle, text: "Vazamento de dados sensíveis" },
  { icon: XCircle, text: "Ransomware e sequestro de dados" },
  { icon: XCircle, text: "Perda financeira por fraudes" },
  { icon: XCircle, text: "Danos à reputação da marca" },
  { icon: XCircle, text: "Multas por não conformidade" },
  { icon: XCircle, text: "Interrupção da operação" },
];

const faq = [
  { question: "Como funciona uma auditoria de segurança?", answer: "Realizamos uma análise completa da sua infraestrutura, sistemas e processos, identificando vulnerabilidades e gerando um relatório com recomendações priorizadas por nível de risco." },
  { question: "Pentest pode derrubar meus sistemas?", answer: "Nossos testes são conduzidos de forma controlada e segura, sem impactar a disponibilidade dos seus serviços. Seguimos metodologias reconhecidas internacionalmente." },
  { question: "Preciso me adequar à LGPD?", answer: "Sim. Toda empresa que coleta ou processa dados pessoais precisa estar em conformidade com a LGPD. Oferecemos consultoria completa para adequação." },
];

const CyberSecurityPage = () => (
  <Layout>
    <title>Cyber Security - Proteção Digital | Nexus Tech</title>
    <meta name="description" content="Segurança digital, prevenção de riscos e proteção de sistemas, dados e infraestrutura. Análise de vulnerabilidades, pentest, LGPD e monitoramento contínuo." />

    <ServicePageHero
      label="Cyber Security"
      title="Cyber Security para Proteger sua Operação"
      subtitle="Segurança digital de nível militar. Prevenção de riscos e proteção de sistemas, dados e infraestrutura com expertise comprovada."
    />

    <ServiceSection title="Serviços de Segurança Cibernética">
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-hover rounded-2xl p-6 border border-border/30 h-full">
              <s.icon size={24} className="text-neon-green mb-4" />
              <h3 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ServiceSection>

    <ServiceSection title="Riscos que Prevenimos" className="bg-card">
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
        {risks.map((r, i) => (
          <StaggerItem key={i}>
            <div className="flex items-center gap-3">
              <r.icon size={18} className="text-destructive flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{r.text}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ServiceSection>

    <FAQSection items={faq} />
    <ServiceCTA />
  </Layout>
);

export default CyberSecurityPage;
