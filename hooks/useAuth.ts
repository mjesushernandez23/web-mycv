import { useSetRecoilState } from "recoil";
import { userInfoAtom } from "@store/userAtoms";
import { useRouter } from "next/router";
import { deleteToken, setToken } from "@api/localStorage";
import { LoginResponseProps } from "@utils/interfaces/api";

export default function useAuth() {
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const router = useRouter();

  const handleLogin = (info: LoginResponseProps) => {
    const { jwt, user } = info;
    setToken(jwt);
    setUserInfo(user);
    router.push("/profile");
  };

  const handleLogout = () => {
    setUserInfo(null);
    deleteToken();
  };

  return {
    handleLogin,
    handleLogout,
  };
}
