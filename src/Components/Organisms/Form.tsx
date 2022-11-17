import CustomButton from "../Molecules/CustomButton";
import CustomInput, { CustomInputTypes } from "../Molecules/CustomInput";
import Header from "../Atoms/Header";
import styled from "styled-components";
import CustomText from "../Atoms/Text";
import { FunctionComponent } from "react";

type CustomFormTypes = {
  inputs: CustomInputTypes[];
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  header: string;
  belowSubmitText?: FunctionComponent;
  submitText: string;
};

export default function Form({
  inputs,
  onSubmit,
  header,
  belowSubmitText,
  submitText,
}: CustomFormTypes) {
  return (
    <FormHolder onSubmit={onSubmit}>
      <Header text={header} />
      {inputs.map((input, index) => (
        <CustomInput
          key={index}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          setValue={input.setValue}
        />
      ))}
      <CustomButton text={submitText} type="submit" />
      {belowSubmitText != null && <CustomText Child={belowSubmitText} />}
    </FormHolder>
  );
}

const FormHolder = styled.form``;
