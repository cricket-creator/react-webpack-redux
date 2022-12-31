import styles from "./Button.module.scss";

import React, { PropsWithChildren, HTMLAttributes } from "react";

interface Button extends HTMLAttributes<HTMLButtonElement> {}

function Button({
  children,
  ...props
}: PropsWithChildren<Button>): JSX.Element {
  return (
    <button
      className={styles.btn}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
