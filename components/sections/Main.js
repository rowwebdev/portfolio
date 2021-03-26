import { useContext } from "react";
import Button from "../Button";

import ThemeContext from "../../context/theme-context";
import { THEMES } from "../Theme";

import sectionStyles from "../../styles/Section.module.scss";
import styles from "../../styles/Main.module.scss";

const Main = () => {
  const theme = useContext(ThemeContext);
  const currentTheme = THEMES[theme.themeId];

  const changeTheme = () => {
    let themeId = +theme.themeId;
    if (themeId < 2) themeId++;
    // go to next theme
    else themeId = 1; // go back to first theme

    theme.switchTheme(themeId);
  };

  const classNames = [sectionStyles.Section, styles.Main];
  classNames.push(styles[`Theme${theme.themeId}`]);

  return (
    <section className={classNames.join(" ")}>
      <div className={styles.Container}>
        <header>
          <h2>Rowan Lawrence</h2>
          <nav>
            <div onClick={changeTheme}>
              <span
                className="iconify"
                data-icon="clarity:switch-line"
                data-inline="false"
              ></span>
            </div>
          </nav>
        </header>
        <div className={styles.Hero}>
          <h1>Loves to create</h1>
          <h2>Eager to learn</h2>
          <p>
            A full stack developer currently searching for the next opportunity
            to create amazing user experiences, learn from talented people, and
            contribute to a successful team.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className={styles.CallToAction}></div>
      </div>

      <div className={styles.Overlay}></div>
      <video
        src={`/assets/${currentTheme.bgVideo}`}
        muted
        loop
        autoPlay
      ></video>
    </section>
  );
};

export default Main;
