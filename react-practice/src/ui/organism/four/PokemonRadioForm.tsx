import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export interface GRInterface {
  setFieldValue: (arg1: string, arg2: number | string | object | File) => void;
  setValue: string;
}

export const PokemonRadioForm = (props: GRInterface) => {
  const { setFieldValue, setValue } = props;
  console.log("render:diamond");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("pokemon", event.target.value);
  };
  return (
    <>
      <div>
        <FormLabel id="pokemon-radio-button-label">Pokemon</FormLabel>
        <RadioGroup
          aria-labelledby="pokemon-radio-buttons-group"
          defaultValue=""
          name="radio-buttons-group-1"
        >
          <FormControlLabel
            value="diamond"
            control={
              <Radio
                checked={setValue === "diamond"}
                onChange={handleChange}
                value="diamond"
                name="radio-buttons-diamond"
              />
            }
            label="ダイヤモンド"
          />
          <FormControlLabel
            value="pearl"
            control={
              <Radio
                checked={setValue === "pearl"}
                onChange={handleChange}
                value="pearl"
                name="radio-buttons-pearl"
              />
            }
            label="パール"
          />
        </RadioGroup>
      </div>
    </>
  );
};
