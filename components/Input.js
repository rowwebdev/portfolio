import React, { useContext } from "react";

import ThemeContext from "../context/theme-context";

import styles from "../styles/Input.module.scss";

const Input = ({ elementType, id, style, iconEl }) => {
  const theme = useContext(ThemeContext);
  const classNames = [styles.Input];
  iconEl && classNames.push(styles.HasIcon);
  return (
    <div className={`${styles.Container} ${styles[`Theme${theme.themeId}`]}`}>
      <Element
        elementType={elementType}
        id={id}
        style={style}
        className={classNames.join(" ")}
      />
      {iconEl && iconEl}
    </div>
  );
};

const Element = ({ elementType, id, value, className, style }) => {
  switch (elementType) {
    case "textarea":
      return (
        <textarea
          id={id}
          value={value}
          className={className}
          style={style}
        ></textarea>
      );
    default:
      return (
        <input
          type={elementType || "text"}
          id={id}
          value={value}
          className={className}
          style={style}
        />
      );
  }
};

export default Input;
