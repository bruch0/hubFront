import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

import Form from "../Components/Organisms/Form";
import { signUp } from "../Services/api";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const navigate = useNavigate();

  const inputMap = [
    {
      type: "text",
      placeholder: "Nome",
      value: name,
      setValue: (value: string) => setName(value),
    },
    {
      type: "email",
      placeholder: "E-mail",
      value: email,
      setValue: (value: string) => setEmail(value),
    },
    {
      type: "password",
      placeholder: "Senha",
      value: password,
      setValue: (value: string) => setPassword(value),
    },
    {
      type: "text",
      placeholder: "Endereço",
      value: address,
      setValue: (value: string) => setAddress(value),
    },
    {
      type: "text",
      placeholder: "Telefone",
      value: phone,
      setValue: (value: string) => setPhone(value),
    },
  ];

  const loginButton = () => <Link to="/">Já possui conta? entre agora!</Link>;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    signUp({ name, email, password, phone, address })
      .then(() => navigate("/"))
      .catch(({ response }) =>
        Swal.fire({
          icon: "error",
          title: response.data,
        })
      );
  };

  return (
    <PageBackground>
      <Form
        onSubmit={onSubmit}
        inputs={inputMap}
        header="Cadastre-se"
        submitText="Registrar"
        belowSubmitText={loginButton}
      />
    </PageBackground>
  );
}

const PageBackground = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #0693e3;
`;
