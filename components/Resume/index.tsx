import { ResumeResponseProps } from "@utils/interfaces/api";
import ContactLink from "./ContactLink";
import styles from "./Resume.module.css";
import RichText from "./RichText";
import usePrint from "@hooks/usePrint";
import Fab from "@mui/material/Fab";
import DownloadIcon from "@mui/icons-material/Download";

interface Props {
  data: ResumeResponseProps;
}

const left_content_colors = "dark:bg-white bg-black dark:text-black text-white";
const right_content_colors = "dark:bg-black bg-white dark:text-white text-black";

const Resume = ({ data }: Props) => {
  const { firstName, lastName, position, contact, aboutMe, skills, workExperience, study } = data;
  const { nodeRef, handlePrint } = usePrint("Martín De Jesús Leaños Hernández");
  return (
    <div>
      <div ref={nodeRef} className={styles.container}>
        <div className={`${left_content_colors} ${styles.container_left}`}>
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
                  <ContactLink
                    className={`${left_content_colors} ${styles.list_item}`}
                    item={item}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`${right_content_colors} ${styles.container_right}`}>
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
      <Fab onClick={() => handlePrint()} color="primary" className="fixed top">
        <DownloadIcon/>
      </Fab>
    </div>
  );
};

export default Resume;
