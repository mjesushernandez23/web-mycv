import MyImage from "@components/ui/MyImage";
import { ResumeResponseProps } from "@utils/interfaces/api";
import ContactLink from "./ContactLink";
import styles from "./Resume.module.css";
import RichText from "./RichText";
import SkillsList from "./SkillsList";

interface Props {
  data: ResumeResponseProps;
}

const left_content_colors = "dark:bg-white bg-black dark:text-black text-white";
const right_content_colors = "dark:bg-black bg-white dark:text-white text-black";

const Resume = ({ data }: Props) => {
  const { firstName, lastName, position, contact, aboutMe, skills, workExperience, study, avatar } =
    data;

  return (
    <div className={styles.container}>
      <div className={`${left_content_colors} ${styles.container_left}`}>
        <MyImage image={avatar} className={styles.avatar} />
        <div className={styles.cont_title}>
          <h1>
            {firstName}
            <br /> {lastName}
          </h1>
          <h2>
            <br />
            {position}
          </h2>
        </div>
        <div className={styles.cont_contact}>
          <h3>Contacto</h3>
          <ul className={styles.list_contact}>
            {contact.map((item, index) => (
              <ContactLink
                classes={{ li: styles.list_item, link: left_content_colors }}
                item={item}
                key={`list-contact-${index}`}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={`${right_content_colors} ${styles.container_right}`}>
        <div>
          <h3>Sobre mi</h3>
          <p>{aboutMe}</p>
        </div>
        <div className={styles.cont_skills}>
          <h3>Habilidades</h3>
          {skills.map((skillList, index) => (
            <SkillsList key={`list-skill${index}`} className={styles.skills_item} {...skillList} />
          ))}
        </div>
        <div>
          <h3>Experiencia</h3>
          <RichText text={workExperience} className={styles.rich_text} />
        </div>
        <div>
          <h3>Estudios</h3>
          <RichText text={study} className={styles.rich_text} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
