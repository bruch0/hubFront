import styled from "styled-components";

type CustomButtonTypes = {
  text: string;
  type: "button" | "submit";
};

export default function CustomButton({ type, text }: CustomButtonTypes) {
  return <Button type={type}>{text}</Button>;
}

const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  border: 0px;
  outline: none;
  padding: 0px 5px;
  font-weight: bold;
  font-family: "Poppins";
`;
