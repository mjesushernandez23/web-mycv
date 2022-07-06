import ReactMarkdown from "react-markdown";

interface RichTextProps {
  text: string;
  className: string;
}
const RichText = ({ text, className }: RichTextProps) => {
  return <ReactMarkdown className={className}>{text}</ReactMarkdown>;
};

export default RichText;
