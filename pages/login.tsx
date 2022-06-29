import { useState } from "react";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { Suspense } from "react";
import { Button, Dialog } from "@mui/material";

const FormLogin = dynamic(() => import("@forms/FormLogin"), { ssr: false, suspense: true });
const RecoverPassword = dynamic(() => import("@forms/RecoverPassword"), {
  ssr: false,
  suspense: true,
});
const FormRegister = dynamic(() => import("@forms/FormRegister"), {
  suspense: true,
  ssr: false,
});

const Login: NextPage = () => {
  const [isRememberPassword, setIsRememberPassword] = useState<boolean>(false);
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false);

  const handleShowRememberPassword = () => {
    setIsRememberPassword(prev => !prev);
  };

  return (
    <div className="p-4 flex flex-wrap justify-center">
      <Typography variant="h4">{showRegisterForm ? "Regístrate" : "Inicio de sesión"}</Typography>
      <Suspense fallback={"loading..."}>
        {showRegisterForm ? (
          <FormRegister onClose={() => setShowRegisterForm(false)} />
        ) : (
          <FormLogin onRegister={() => setShowRegisterForm(true)} />
        )}
        <Dialog open={isRememberPassword} onClose={handleShowRememberPassword}>
          <RecoverPassword onClose={handleShowRememberPassword} />
        </Dialog>
        <Button
          className="w-fit mx-auto"
          LinkComponent="a"
          onClick={handleShowRememberPassword}
          variant="text"
        >
          Recuperar contraseña
        </Button>
      </Suspense>
    </div>
  );
};

export default Login;
