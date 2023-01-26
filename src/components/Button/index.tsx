import styles from "./Button.module.scss";

import React, { PropsWithChildren, ButtonHTMLAttributes, Ref } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(
  { children, ...props }: PropsWithChildren<Button>,
  ref: Ref<HTMLButtonElement>
): JSX.Element {
  return (
    <button
      className={styles.btn}
      {...props}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
