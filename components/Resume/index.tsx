import { ResumeResponseProps } from "@utils/interfaces/api";
import ContactLink from "./ContactLink";
import styles from "./Resume.module.css";
import RichText from "./RichText";

interface Props {
  data: ResumeResponseProps;
}

const Resume = ({ data }: Props) => {
  const { firstName, lastName, position, contact, aboutMe, skills, workExperience, study } = data;

  return (
    <div className={styles.container}>
      <div className={`text-white bg-black dark:bg-white ${styles.container_left}`}>
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
              <li key={`list-contact-${index}`}>
                <ContactLink className={styles.list_item} item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.container_right}>
        <div>
          <h3>Sobre mi</h3>
          <p>{aboutMe}</p>
        </div>
        <div>
          <h3>Habilidades</h3>
          <RichText text={skills} className={styles.rich_text} />
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
