import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense } from "react";
const FormLogin = dynamic(() => import("@components/views/login/FormLogin"), {
  suspense: true,
  ssr: false,
});

const Login: NextPage = () => {
  const {
    query: { confirmPassword },
  } = useRouter();

  console.log("query", confirmPassword);

  return (
    <div className="p-4">
      <Typography variant="h3" align="center">
        Acceso
      </Typography>
      <Suspense fallback={"loading..."}>
        <FormLogin />
      </Suspense>
    </div>
  );
};

export default Login;
