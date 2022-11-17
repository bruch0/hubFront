import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "" : "http://localhost:4000/",
});

const signUp = ({
  name,
  email,
  password,
  phone,
  address,
}: {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}): any => api.post("/signup", { name, email, password, phone, address });

const signIn = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): any => api.post("/signin", { email, password });

export { signUp, signIn };
