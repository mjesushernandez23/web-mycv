import { useState } from "react";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { Button, Dialog } from "@mui/material";

const FormLogin = dynamic(() => import("@forms/FormLogin"), { ssr: false, suspense: true });
const RecoverPassword = dynamic(() => import("@forms/RecoverPassword"), {
  ssr: false,
  suspense: true,
});

const Login: NextPage = () => {
  const [isRememberPassword, setIsRememberPassword] = useState<boolean>(false);
  const {
    query: { confirmPassword },
  } = useRouter();

  const handleShowRememberPassword = () => {
    setIsRememberPassword(prev => !prev);
  };

  console.log("query", confirmPassword);

  return (
    <div className="p-4 flex flex-wrap justify-center">
      <Typography variant="h4">Inicio de sesión</Typography>
      <Suspense fallback={"loading..."}>
        <FormLogin />
        <Dialog open={isRememberPassword} onClose={handleShowRememberPassword}>
          <RecoverPassword onClose={handleShowRememberPassword} />
        </Dialog>

        <Button
          className="w-fit mx-auto mt-2"
          onClick={handleShowRememberPassword}
          LinkComponent="a"
          variant="text"
        >
          Recuperar contraseña
        </Button>
      </Suspense>
    </div>
  );
};

export default Login;
