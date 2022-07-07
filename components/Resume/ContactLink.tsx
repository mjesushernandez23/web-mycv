import { ContactProps } from "@interfaces/api";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ContactItemProps {
  item: ContactProps;
  classes: {
    li: string;
    link: string;
  };
}

const optionsItem = {
  email: {
    icon: <EmailIcon />,
    prefix: "mailto:",
  },
  tel: {
    icon: <LocalPhoneIcon />,
    prefix: "tel:",
  },
  linkedin: {
    icon: <LinkedInIcon />,
    prefix: "https://",
  },
  repository: {
    icon: <GitHubIcon />,
    prefix: "https://",
  },
};

const ContactLink = ({ item: { type, value }, classes: { li, link } }: ContactItemProps) => {
  const selectType = optionsItem[type];
  return (
    <li className={li}>
      <span>{selectType.icon}</span>
      <a className={link} href={`${selectType.prefix}${value}`} target="_blank" rel="noreferrer">
        {value}
      </a>
    </li>
  );
};

export default ContactLink;
