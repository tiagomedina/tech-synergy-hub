import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neon-green text-primary-foreground shadow-lg glow-green hover:scale-110 transition-transform duration-300"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
