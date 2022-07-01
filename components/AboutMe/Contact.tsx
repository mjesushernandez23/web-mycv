import { ContactProps } from "@interfaces/api";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Props extends ContactProps {
  className: string;
}

const contactOptions = {
  email: { icon: <EmailIcon />, prefix: "mailto:" },
  tel: { icon: <LocalPhoneIcon />, prefix: "tel:" },
  whatsapp: { icon: <WhatsAppIcon />, prefix: "https://wa.me/" },
  repository: { icon: <GitHubIcon />, prefix: "" },
};

const Contact = ({ type, value, className }: Props) => {
  const selectType = contactOptions[type];

  return (
    <li className={className}>
      <a href={`${selectType}${value}`} target="_blank" rel="noreferrer">
        <span>{selectType.icon}</span>
        {value}
      </a>
    </li>
  );
};

export default Contact;
