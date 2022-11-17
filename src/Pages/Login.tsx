import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

import Form from "../Components/Organisms/Form";
import { signIn } from "../Services/api";
import { storeUserInfo } from "../Services/localStorage";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const inputMap = [
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
  ];

  const registerButton = () => (
    <Link to="/register">Não possui conta? Registre-se agora!</Link>
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    signIn({ email, password })
      .then(async (response: any) => {
        storeUserInfo(response.data.sessionToken);
        navigate("/home");
      })
      .catch(
        async ({ response }: { response: any }) =>
          await Swal.fire({
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
        header="Faça seu login"
        submitText="Entrar"
        belowSubmitText={registerButton}
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
