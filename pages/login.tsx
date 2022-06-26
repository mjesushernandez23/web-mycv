import { useState } from "react";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { DYNAMIC } from "@utils/constants";
import { Button, Dialog } from "@mui/material";

const FormLogin = dynamic(() => import("@views/login/FormLogin"), { ssr: false, suspense: true });
const RememberPassword = dynamic(() => import("@views/login/RememberPassword"), {
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
      <Typography variant="h3">Acceso</Typography>
      <Suspense fallback={"loading..."}>
        <FormLogin />
        <Dialog open={isRememberPassword} onClose={handleShowRememberPassword}>
          <RememberPassword />
        </Dialog>

        <Button className="w-fit mx-auto" onClick={handleShowRememberPassword} variant="text">
          Olvide la contraseña
        </Button>
      </Suspense>
    </div>
  );
};

export default Login;
