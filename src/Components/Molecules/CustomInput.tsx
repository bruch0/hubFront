import styled from "styled-components";

export type CustomInputTypes = {
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
};

export default function CustomInput({
  type,
  placeholder,
  value,
  setValue,
}: CustomInputTypes) {
  return (
    <Holder>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </Holder>
  );
}

const Holder = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  border: 0px;
  outline: none;
  padding: 0px 5px;
  font-family: "Poppins";
`;
