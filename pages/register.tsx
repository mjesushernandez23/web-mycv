import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const FormRegister = dynamic(() => import("@forms/FormRegister"), {
  suspense: true,
  ssr: false,
});

const Register: NextPage = () => {
  return (
    <Box className="p-4">
      <Typography variant="h4" align="center">
        Regístrate
      </Typography>
      <Suspense fallback={"Loading..."}>
        <FormRegister />
      </Suspense>
    </Box>
  );
};

export default Register;
