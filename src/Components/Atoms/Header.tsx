import styled from "styled-components";

type HeaderTypes = {
  text: string;
};

export default function Header({ text }: HeaderTypes) {
  return <HeaderText>{text}</HeaderText>;
}

const HeaderText = styled.h1`
  color: white;
  font-size: 7vw;
  margin-bottom: 30px;
  text-align: center;
`;
