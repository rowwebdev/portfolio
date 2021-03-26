import { useContext } from "react";
import Button from "../Button";

import ThemeContext from "../../context/theme-context";

import sectionStyles from "../../styles/Section.module.scss";
import styles from "../../styles/About.module.scss";

const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <section
      className={`${sectionStyles.Section} ${styles.About} ${
        styles[`Theme${theme.themeId}`]
      }`}
    >
      <div className={styles.Container}>
        <div className={styles.Left}>
          <h2>Who is Rowan?</h2>
          <h1>About Me</h1>
          <p>
            I started my dev career working for a small company ~15 years ago.
            When I say small, I mean a few of us were working out of our bosses
            spare bedroom in the outer suburbs of Melbourne.
          </p>
          <p>
            Since then my role has varied, but I've always stayed involved in
            development.
          </p>
          <p>
            I'm currently lead developer and love the challenges and
            oppotunities that brings.
          </p>
          <Button>Projects</Button>
        </div>
        <div className={styles.Center}>
          <div className={styles.Image}></div>
          <div className={styles.Text}>
            <h3>Learning</h3>
            <p>
              I’m a bit of a fiend for Udemy courses and am currently working
              through a backlog of 3-4 courses on NextJS, Git + Github and React
              Native.
            </p>
          </div>
        </div>
        <div className={styles.Right}>
          <div className={styles.Text}>
            <h3>Staying Active</h3>
            <p>
              When I’m not working I’m all about getting outdoors. I play
              football and am a keen runner (caught the bug while trying to stay
              in shape during lockdown).
            </p>
            <p>
              I also love finding new walking trails with my wife and our two
              dogs.
            </p>
          </div>
          <div className={styles.Image}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
