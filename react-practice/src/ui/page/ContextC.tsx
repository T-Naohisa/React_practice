import React, { useContext } from "react";

import { UserContext } from "./Counter";
export const ContextC = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div>ContextC</div>
      <div>{user}</div>
    </>
  );
};
