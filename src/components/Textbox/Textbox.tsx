import React, { ChangeEventHandler } from "react";

interface TTextBox {
  value: string;
  placeHolder: string;
  type: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
  validity: string;

}

function TextBox({
  value,
  placeHolder,
  type,
  id,
  onChange,
  required,
  validity
}: TTextBox) {
  console.log({validity})
  return (
    <input
      type={type}
      id={id}
      className={
        "form-control" + " " + validity
      }
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      required={required}
    />

  );
}

export default TextBox;
