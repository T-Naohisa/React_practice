import React from "react";

type props = { handleClick: Function; value: string };

export const Button = React.memo((props: props) => {
  console.log("Button child component ", props.value);
  return (
    <button
      type="button"
      onClick={() => {
        props.handleClick();
      }}
    >
      {props.value}
    </button>
  );
});
