import styled from "styled-components";
import CustomTableHeader from "../Molecules/CustomTableHeader";
import CustomTableRow from "../Molecules/CustomTableRow";

export default function Table() {
  return (
    <TableHolder>
      <CustomTableHeader headers={["nome", "cnpj"]} />
      <CustomTableRow content={["lucas", "121"]} />
      <CustomTableRow content={["lucas", "121"]} />
    </TableHolder>
  );
}

const TableHolder = styled.div`
  width: 100%;
  padding: 0px 15px;
  border: 0px;
`;
