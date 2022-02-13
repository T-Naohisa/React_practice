import React from "react";
import { withFormik, FormikProps } from "formik";
import { PokemonRadioForm } from "ui/organism/four/PokemonRadioForm";
import { ThreeFamiliesRadioForm } from "ui/organism/four/ThreeFamiliesRadioForm";
import { TestRadioButtonForm } from "ui/organism/four/TestRadioButtonForm";
import Button from "@mui/material/Button";

export interface FormValues {
  name: string;
  pokemon: string;
  ThreeFamilies: string;
}

export const FormikComponent = (props: FormikProps<FormValues>) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          name="name"
        />
        {errors.name !== "" && touched.name && (
          <div id="feedback">{errors.name}</div>
        )}
        <PokemonRadioForm
          setFieldValue={props.setFieldValue}
          setValue={values.pokemon}
        />
        {errors.pokemon !== "" && touched.pokemon && (
          <div id="feedback">{errors.pokemon}</div>
        )}

        {values.pokemon === "diamond" && (
          <ThreeFamiliesRadioForm
            setFieldValue={props.setFieldValue}
            setValue={values.ThreeFamilies}
          />
        )}
        {/* <ThreeFamiliesRadioForm /> */}
        {/* <TestRadioButtonForm /> */}
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </form>
    </>
  );
};

export const SampleForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    pokemon: "",
    ThreeFamilies: "",
  }),
  validate: (values) => {
    const errors = { name: "", pokemon: "" };

    if (!values.name) {
      errors.name = "Required";
      console.log("NG");
    }
    if (!values.pokemon) {
      errors.pokemon = "Required-pokemon";
      console.log("NG-pokemon");
    }
    return errors;
  },
  handleSubmit: () => {
    console.log("click");
  },
})(FormikComponent);
