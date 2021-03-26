import { useContext } from "react";
import styles from "../styles/Button.module.scss";

import ThemeContext from "../context/theme-context";

const Button = ({ children, onClick, secondary, fullWidth }) => {
  const theme = useContext(ThemeContext);

  const classNames = [styles.Button, styles[`Theme${theme.themeId}`]];
  secondary && classNames.push(styles.Secondary);
  fullWidth && classNames.push(styles.FullWidth);

  return (
    <button onClick={onClick} className={classNames.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
