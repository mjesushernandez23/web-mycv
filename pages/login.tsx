import FormLogin from "@components/views/login/FormLogin";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const {
    query: { confirmPassword },
  } = useRouter();

  console.log("query", confirmPassword);

  return (
    <div className="p-4">
      <Typography variant="h3" align="center">Acceso</Typography>
      <FormLogin />
    </div>
  );
};

export default Login;
