import { useEffect } from "react";
import { getToken } from "@api/localStorage";
import { userInfoAtom } from "@store/userAtoms";
import { useSetRecoilState } from "recoil";
import { userMeApi } from "@api/userApi";

export default function useRememberSession(): void {
  const setUserInfo = useSetRecoilState(userInfoAtom);

  /* eslint-disable */
  useEffect(() => {
    const token = getToken();
    token &&
      (async () => {
        const result = await userMeApi(token);
        setUserInfo(result);
      })();
  }, []);
  /* eslint-enable */
}
