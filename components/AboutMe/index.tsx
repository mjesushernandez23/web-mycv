import MyImage from "@components/ui/MyImage";
import { ResumeResponseProps } from "@interfaces/api";
import styles from "./AboutMe.module.css";
import Contact from "./Contact";

interface Props extends ResumeResponseProps {}

const AboutMe = (props: Props) => {
  const {
    firstName,
    lastName,
    position,
    description,
    skills,
    workExperience,
    study,
    objective,
    additional,
    contact,
    photo,
  } = props;

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-1/3">
        <div>
          <MyImage image={photo} className="w-10 h-10" />
        </div>
        <div>
          <h2>{description}</h2>
          <div>{skills}</div>
        </div>
        <address>
          {contact.map((item, index) => (
            <Contact key={`list-contact${index}`} {...item} className="" />
          ))}
        </address>
      </div>
      <div className="w-2/3">
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>{position}</h2>
        <hr />
        <div>{workExperience}</div>
        <div>{study}</div>
        <div>{objective}</div>
        <div>{additional}</div>
      </div>
    </div>
  );
};

export default AboutMe;
