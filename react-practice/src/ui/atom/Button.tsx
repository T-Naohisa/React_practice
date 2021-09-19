import React from "react";
import Button from "@mui/material/Button";
/**
 * ButtonComponent
 */

export interface ButtonWapperInterface {
  buttonName: string;
  test: string;
  onClick: Function;
}

export const ButtonWapper = (props: ButtonWapperInterface) => {
  console.log("render Button");
  const click = () => {
    props.onClick();
  };

  return (
    <>
      <div className="buttonwapper">
        <Button variant="contained" color="primary" onClick={click}>
          {props.buttonName}
        </Button>
      </div>
    </>
  );
};
