import { userInfoAtom } from "@store/userAtoms";
import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import useAuth from "@hooks/useAuth";
import { Typography } from "@mui/material";

const ProfilePage: NextPage = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const router = useRouter();
  if (userInfo === null) router.push("/");
  const { handleLogout } = useAuth();

  return (
    <div>
      <Typography variant="h4" align="center">
        Soy el Perfil
      </Typography>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
    </div>
  );
};

export default ProfilePage;
