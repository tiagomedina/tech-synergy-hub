import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { StaggerItem } from "./SectionReveal";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const ServiceCard = ({ icon: Icon, title, description, href }: ServiceCardProps) => (
  <StaggerItem>
    <Link to={href} className="block group">
      <div className="glass-card-hover rounded-2xl p-6 sm:p-8 border border-border/30 h-full">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <span className="text-sm font-medium text-primary group-hover:underline">Saiba mais →</span>
      </div>
    </Link>
  </StaggerItem>
);

export default ServiceCard;
