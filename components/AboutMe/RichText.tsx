import ReactMarkdown, { Options } from "react-markdown";

interface Props {
  text: string;
  className: string;
}

const RichText = ({ text, className }: Props) => {
  return <ReactMarkdown className={className}>{text}</ReactMarkdown>;
};

export default RichText;
