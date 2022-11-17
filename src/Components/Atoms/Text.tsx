import { FunctionComponent } from "react";
import styled from "styled-components";

type TextTypes = {
  Child: FunctionComponent;
};

export default function CustomText({ Child }: TextTypes) {
  return (
    <Text>
      <Child />
    </Text>
  );
}

const Text = styled.h3`
  color: white;
  font-size: 3.5vw;
  margin-top: 5px;

  a {
    color: white;
  }
  a:hover {
    color: white;
  }
`;
