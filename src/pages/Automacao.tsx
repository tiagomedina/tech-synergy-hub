import Layout from "@/components/Layout";
import { ServicePageHero, ServiceSection, ServiceCTA, FAQSection } from "@/components/ServicePage";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/SectionReveal";
import { Cpu, Lightbulb, Lock, Thermometer, Eye, Droplets, Smartphone, Mic, Sun, DoorOpen, CheckCircle } from "lucide-react";

const solutions = [
  { icon: Lightbulb, title: "Controle de Iluminação", desc: "Iluminação inteligente com cenas programáveis, dimmers e controle remoto." },
  { icon: DoorOpen, title: "Portões e Fechaduras", desc: "Automação de acessos com controle via app, biometria e senhas temporárias." },
  { icon: Eye, title: "Sensores de Presença", desc: "Detecção de movimento para segurança e automação de ambientes." },
  { icon: Thermometer, title: "Climatização Inteligente", desc: "Controle automático de temperatura e umidade para conforto ideal." },
  { icon: Sun, title: "Automação de Cortinas", desc: "Cortinas motorizadas com programação horária e integração solar." },
  { icon: Droplets, title: "Irrigação Inteligente", desc: "Sistemas de irrigação automatizados com sensores de umidade do solo." },
  { icon: Smartphone, title: "Monitoramento Remoto", desc: "Câmeras e sensores acessíveis de qualquer lugar pelo smartphone." },
  { icon: Mic, title: "Assistentes Virtuais", desc: "Integração com Alexa, Google Home e outros assistentes de voz." },
];

const benefits = [
  "Conforto e praticidade no dia a dia",
  "Segurança reforçada para sua família",
  "Economia de energia de até 30%",
  "Controle total pelo smartphone",
  "Personalização completa do projeto",
  "Valorização do imóvel",
];

const techs = ["ESP32", "Arduino", "Sensores IoT", "Módulos Relé", "Displays OLED", "Comunicação Wi-Fi/Bluetooth", "MQTT Protocol", "Home Assistant"];

const faq = [
  { question: "Preciso reformar minha casa para instalar automação?", answer: "Na maioria dos casos, não. Nossos projetos com microcontroladores são projetados para instalação mínima e podem se integrar à infraestrutura elétrica existente." },
  { question: "Qual microcontrolador vocês utilizam?", answer: "Utilizamos principalmente o ESP32 por sua versatilidade, conectividade Wi-Fi/Bluetooth integrada e excelente custo-benefício. Em projetos específicos, também trabalhamos com Arduino." },
  { question: "Posso controlar tudo pelo celular?", answer: "Sim! Todos os nossos projetos incluem controle via aplicativo mobile, com acesso remoto de qualquer lugar do mundo." },
  { question: "O sistema funciona sem internet?", answer: "Sim, os comandos locais funcionam independente da internet. O acesso remoto requer conexão, mas a automação local opera de forma autônoma." },
];

const AutomacaoPage = () => (
  <Layout>
    <title>Automação Residencial com Microcontroladores | Nexus Tech</title>
    <meta name="description" content="Projetos personalizados de automação residencial inteligente com ESP32, Arduino e microcontroladores. Transforme sua casa em um ambiente moderno, eficiente e conectado." />

    <ServicePageHero
      label="Automação Residencial"
      title="Automação Residencial Inteligente com Microcontroladores"
      subtitle="Projetos personalizados para transformar sua casa em um ambiente moderno, eficiente, conectado e seguro."
    />

    <ServiceSection title="Soluções de Automação">
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-hover rounded-2xl p-6 border border-border/30 h-full">
              <s.icon size={24} className="text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ServiceSection>

    <ServiceSection title="Benefícios da Automação" className="bg-card">
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

    <ServiceSection title="Tecnologias Utilizadas">
      <StaggerContainer className="flex flex-wrap gap-3">
        {techs.map((t, i) => (
          <StaggerItem key={i}>
            <span className="font-mono-label px-4 py-2 glass-card rounded-lg border border-border/30 text-primary">{t}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </ServiceSection>

    <FAQSection items={faq} />
    <ServiceCTA />
  </Layout>
);

export default AutomacaoPage;
