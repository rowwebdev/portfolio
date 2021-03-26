import { useContext } from "react";
import Button from "../Button";

import ThemeContext from "../../context/theme-context";

import sectionStyles from "../../styles/Section.module.scss";
import styles from "../../styles/Projects.module.scss";

const Projects = () => {
  const theme = useContext(ThemeContext);

  return (
    <section
      className={`${sectionStyles.Section} ${styles.Projects} ${
        styles[`Theme${theme.themeId}`]
      }`}
    >
      <div className={styles.Container}>
        <div className={styles.Left}>
          <header>
            <h2>What have I done?</h2>
            <h1>Projects</h1>
            <div className={styles.Text}>
              <p>
                Being gainfully employed and busy is great and all, but it
                hasn’t left me much time for side projects to fill out my
                portfolio with.
              </p>
              <p>Here’s a sample of what I’m capable of.</p>
            </div>
          </header>
        </div>
        <div className={styles.Right}>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      {/* <ProjectDetails /> */}
    </section>
  );
};

const Project = () => {
  return (
    <div className={styles.Project}>
      <div className={styles.Description}>
        <h3>Portfolio</h3>
        <p>
          This portfolio page! Needed to be simple, stylish (IMO) and to the
          point.
        </p>
        <p>This was my first time using NextJS and Netlify.</p>
        <Button secondary>Read More</Button>
      </div>
      <div className={styles.Picture}></div>
    </div>
  );
};

const ProjectDetails = () => {
  return (
    <div className={styles.ProjectDetails}>
      <header>
        <h1>Portfolio</h1>
        <span
          class="iconify"
          data-icon="grommet-icons:form-close"
          data-inline="false"
        ></span>
      </header>
      <p>
        This was created out of a need to have something more the a docx CV to
        give to potential employers.
      </p>
      <p>
        React is my front end library of choice, and typically I opt for SPAs by
        default using create-ract-app. I decided to go with the more search
        engine friendly approach and used Next JS.
      </p>
      <p>
        This was my first time using the framework and although I still have a
        lot to learn I am liking it so far.
      </p>
      <p>
        The site is hosted in Netlify which is great for it’s integration with
        GitHub and makes pushing changes to the live site super easy.
      </p>
      <div className={styles.Icons}>
        <span
          class="iconify"
          data-icon="cib:javascript"
          data-inline="false"
        ></span>
        <span
          class="iconify"
          data-icon="logos:nextjs"
          data-inline="false"
        ></span>
        <span class="iconify" data-icon="cib:react" data-inline="false"></span>
        <span
          class="iconify"
          data-icon="cib:sass-alt"
          data-inline="false"
        ></span>
      </div>
      <Button>View on Github</Button>
    </div>
  );
};

export default Projects;
