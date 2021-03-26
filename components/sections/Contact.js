import { useContext } from "react";
import Button from "../Button";
import Input from "../Input";

import ThemeContext from "../../context/theme-context";

import sectionStyles from "../../styles/Section.module.scss";
import styles from "../../styles/Contact.module.scss";

const Contact = () => {
  const theme = useContext(ThemeContext);

  return (
    <section
      className={`${sectionStyles.Section} ${styles.Contact} ${
        styles[`Theme${theme.themeId}`]
      }`}
    >
      <div className={styles.Container}>
        <h1>Get in touch</h1>
        <p>Leave a message if you'd like to know more about me</p>
        <form>
          <div className={styles.Form}>
            <div>
              <div className={styles.FormEl}>
                <label htmlFor="message">Message</label>
                <Input
                  elementType="textarea"
                  id="message"
                  style={{ height: "11rem" }}
                />
              </div>
            </div>
            <div>
              <div className={styles.FormEl}>
                <label htmlFor="name">Your Name</label>
                <Input
                  elementType="text"
                  id="name"
                  iconEl={
                    <span
                      className="iconify"
                      data-icon="ant-design:user-outlined"
                      data-inline="false"
                    ></span>
                  }
                />
              </div>
              <div className={styles.FormEl}>
                <label htmlFor="email">Your Email</label>
                <Input
                  elementType="email"
                  id="email"
                  iconEl={
                    <span
                      className="iconify"
                      data-icon="ic:baseline-alternate-email"
                      data-inline="false"
                    ></span>
                  }
                />
              </div>
              <Button secondary fullWidth>
                Send Message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
