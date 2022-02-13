import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export interface TFInterface {
  setFieldValue: (arg1: string, arg2: number | string | object | File) => void;
  setValue: string;
}

export const ThreeFamiliesRadioForm = (props: TFInterface) => {
  const { setFieldValue, setValue } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("ThreeFamilies", event.target.value);
  };
  return (
    <>
      <FormLabel id="ThreeFamilies-radio-button-label">ThreeFamilies</FormLabel>
      <RadioGroup
        aria-labelledby="ThreeFamilies-radio-buttons-group"
        defaultValue=""
        name="radio-buttons-group-2"
      >
        <FormControlLabel
          value="fire"
          control={
            <Radio
              checked={setValue === "fire"}
              onChange={handleChange}
              value="fire"
              name="radio-buttons-fire"
            />
          }
          label="火属性"
        />
        <FormControlLabel
          value="mail"
          control={
            <Radio
              checked={setValue === "water"}
              onChange={handleChange}
              value="water"
              name="radio-buttons-water"
            />
          }
          label="水属性"
        />
        <FormControlLabel
          value="tree"
          control={
            <Radio
              checked={setValue === "tree"}
              onChange={handleChange}
              value="tree"
              name="radio-buttons-tree"
            />
          }
          label="木属性"
        />
      </RadioGroup>
    </>
  );
};
