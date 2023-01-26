import React, { InputHTMLAttributes, Ref } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps, ref: Ref<HTMLInputElement>): JSX.Element {
  return (
    <input
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(Input);
