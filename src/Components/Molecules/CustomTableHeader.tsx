import styled from "styled-components";

type CustomTableHeaderTypes = {
  headers: string[];
};

export default function CustomTableHeader({ headers }: CustomTableHeaderTypes) {
  return (
    <Header>
      {headers.map((header, index) => (
        <div key={index}>{header}</div>
      ))}
    </Header>
  );
}

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px 15px 0px 0px;

  div {
    font-weight: bold;
    font-size: 20px;
  }
`;
