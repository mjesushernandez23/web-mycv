import { ContactProps } from "@interfaces/api";

interface ContactItemProps {
  item: ContactProps;
  className: string;
}

const prefixHref = {
  email: "mailto:",
  tel: "tel:",
  whatsapp: "https://wa.me/52",
  repository: "",
};

const ContactLink = ({ item: { type, value }, className }: ContactItemProps) => {
  return (
    <a href={`${prefixHref[type]}${value}`} className={className} target="_blank" rel="noreferrer">
      {value}
    </a>
  );
};

export default ContactLink;
