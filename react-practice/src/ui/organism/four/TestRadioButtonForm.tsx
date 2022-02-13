import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export const TestRadioButtonForm = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <FormLabel id="test-radio-button-label">Test</FormLabel>
      <RadioGroup
        aria-labelledby="test-radio-buttons-group"
        defaultValue=""
        name="radio-buttons-group-3"
      >
        <FormControlLabel
          value="test1"
          control={
            <Radio
              checked={selectedValue === "test1"}
              onChange={handleChange}
              value="test1"
              name="radio-buttons-test1"
            />
          }
          label="test1"
        />
        <FormControlLabel
          value="test2"
          control={
            <Radio
              checked={selectedValue === "test2"}
              onChange={handleChange}
              value="test2"
              name="radio-buttons-test2"
            />
          }
          label="test2"
        />
        <FormControlLabel
          value="test3"
          control={
            <Radio
              checked={selectedValue === "test3"}
              onChange={handleChange}
              value="test3"
              name="radio-buttons-test3"
            />
          }
          label="test3"
        />
      </RadioGroup>
    </>
  );
};
