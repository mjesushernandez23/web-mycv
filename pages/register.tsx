import FormRegister from "@components/views/register/FormRegister";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const register: NextPage = () => {
  return (
    <Box className="p-4">
      <Typography variant="h4" align="center">
        Regístrate
      </Typography>

      <FormRegister />
    </Box>
  );
};

export default register;
