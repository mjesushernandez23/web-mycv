import MyImage from "@components/ui/MyImage";
import { ResumeResponseProps } from "@interfaces/api";
import styles from "./AboutMe.module.css";
import Contact from "./Contact";
import RichText from "./RichText";

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
    <div className={styles.container}>
      <div className={styles.left_content}>
        <div className={styles.cont_image}>
          <MyImage image={photo} className={styles.avatar} />
        </div>
        <div className={styles.mask_gray} />
        <div className={styles.mask_white} />
        <div className={styles.mask_blue} />
        <div className={styles.cont_skills}>
          <h2>{description}</h2>
          <div>{skills}</div>
        </div>
        <address>
          {contact.map((item, index) => (
            <Contact key={`list-contact${index}`} {...item} className="" />
          ))}
        </address>
      </div>
      <div className={styles.right_content}>
        <h1 className={styles.title_name}>
          {firstName} {lastName}
        </h1>
        <h2>{position}</h2>
        <hr className={styles.title_divisor} />
        <pre>{workExperience}</pre>
        <RichText text={study} className={styles.rich_text} />
        <div>{objective}</div>
        <div>{additional}</div>
      </div>
    </div>
  );
};

export default AboutMe;
