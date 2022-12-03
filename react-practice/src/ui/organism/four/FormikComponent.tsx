import React, { useCallback, useMemo } from "react";
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

  // const pokemonChecker = () => {
  //   console.log("check");
  //   if (values.pokemon === "diamond") return true;
  //   return false;
  // };
  const callback = useCallback(() => {
    console.log("check:render");
    console.log(values.pokemon);
    if (values.pokemon === "diamond") return true;
    return false;
  }, [values.pokemon]);

  const memo = useMemo(() => {
    return (
      <>
        <PokemonRadioForm
          setFieldValue={props.setFieldValue}
          setValue={values.pokemon}
        />
      </>
    );
  }, [props.setFieldValue, values.pokemon]);

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
        {memo}
        {/* <PokemonRadioForm
          setFieldValue={props.setFieldValue}
          setValue={values.pokemon}
        /> */}
        {errors.pokemon !== "" && touched.pokemon && (
          <div id="feedback">{errors.pokemon}</div>
        )}
        {callback() && (
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
    }
    if (!values.pokemon) {
      errors.pokemon = "Required-pokemon";
    }
    return errors;
  },
  handleSubmit: () => {
    console.log("click");
  },
})(FormikComponent);
