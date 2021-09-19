import React, { SetStateAction, Dispatch } from "react";

import TextField from "@material-ui/core/TextField";
/**
 * TextComponent
 */

export interface TextWapperInterface {
  setCityName: Dispatch<SetStateAction<string>>;
}
export const TextWapper = (props: TextWapperInterface) => {
  //入力値をFieldで管理する
  const onChangeEvent = (target: string) => {
    props.setCityName(target);
  };

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
          onChange={(e) => onChangeEvent(e.target.value)}
        ></TextField>
      </div>
    </>
  );
};
