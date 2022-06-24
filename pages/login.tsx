import type { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const {
    query: { confirmPassword },
  } = useRouter();

  console.log("query", confirmPassword);

  return <div>Login</div>;
};

export default Login;
