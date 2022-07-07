import { SkillProps } from "@utils/interfaces/api";
import ReactMarkdown from "react-markdown";

interface GenericTitles {
  [key: string]: string;
}

const titleEsp: GenericTitles = {
  languages: "lenguajes",
  librariesComponents: "librerías ui ",
  librariesUtilities: "utilidades",
};

interface SkillsListProps extends SkillProps {
  className: string;
}
const SkillsList = ({ list, type, className }: SkillsListProps) => {
  return (
    <div className={className}>
      <h3>{titleEsp[type] ?? type} </h3>
      <ReactMarkdown>{list}</ReactMarkdown>
    </div>
  );
};

export default SkillsList;
