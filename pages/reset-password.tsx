import { useEffect, useState } from "react";
import ResetPasswords from "@components/forms/ResetPasswords";
import { Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

const ResetPassword: NextPage = () => {
  const [codeConfirmation, setCodeConfirmation] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { code } = router.query as { code?: string };
    code && setCodeConfirmation(code);
  }, [router.isReady, router.query]);

  if (codeConfirmation === null) return <>{codeConfirmation}</>;

  return (
    <div className="p-4">
      <Typography variant="h4" align="center">
        Nueva contraseña
      </Typography>
      <ResetPasswords code={codeConfirmation} />
    </div>
  );
};

export default ResetPassword;
