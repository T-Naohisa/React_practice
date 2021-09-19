import React from "react";

type props = { text: string; countState: number };

export const Count = React.memo((props: props) => {
  console.log("Count child component", props.text);
  return (
    <p>
      {props.text}:{props.countState}
    </p>
  );
});
