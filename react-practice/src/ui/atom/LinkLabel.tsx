import React from "react";
import { Link } from "react-router-dom";

export interface LCInterfalce {
  LinkDestination: string;
  LinkText: string;
}

export const LinkComponent = (props: LCInterfalce) => {
  const { LinkDestination, LinkText } = props;
  return (
    <>
      <p>
        <Link to={LinkDestination}>{LinkText}</Link>
      </p>
    </>
  );
};
