import styled from "styled-components";

type CustomTableRowTypes = {
  content: string[];
};

export default function CustomTableRow({ content }: CustomTableRowTypes) {
  return (
    <Row>
      {content.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </Row>
  );
}

const Row = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid gray;

  :last-of-type {
    border-radius: 0px 0px 15px 15px;
  }
`;
