import React from "react";

import TextField from "@material-ui/core/TextField";
/**
 * TextComponent
 */

export const TextWapper = () => {
  return (
    <>
      <div className="textwapper">
        <TextField
          label="cityname"
          variant="outlined"
          placeholder="とうきょう"
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>
      </div>
    </>
  );
};
