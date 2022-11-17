import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../Components/Atoms/Header";
import CustomText from "../Components/Atoms/Text";
import Table from "../Components/Organisms/Table";

import { getCompanies } from "../Services/api";
import { getUserInfo } from "../Services/localStorage";

export default function Login() {
  const token = getUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      getCompanies({ token })
        .then(async (response: any) => {
          console.log(response.data);
        })
        .catch(async ({ response }: { response: any }) => navigate("/"));
    }
  }, [token]);

  const createCompanyButton = () => (
    <CreateButton>
      <Link to="/register">Criar</Link>
    </CreateButton>
  );

  return (
    <PageBackground>
      <Header text="Empresas" />
      <Table />
      <CustomText Child={createCompanyButton} />
    </PageBackground>
  );
}

const PageBackground = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-top: 10%;
  padding-bottom: 10%;
  min-height: 100vh;
  background-color: #0693e3;
`;

const CreateButton = styled.button`
  width: 100%;
  margin: 0px;
  padding: 10px 30px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #0693e3;
  font-family: "Poppins";
  font-size: 20px;
`;
