import { useEffect } from "react";
import { getToken } from "@api/localStorage";
import { userInfoAtom } from "@store/userAtoms";
import { useSetRecoilState } from "recoil";
import { userMeApi } from "@api/userApi";
import wakeUpServer from "@api/wakeUpServer";

export default function useRememberSession(): void {
  const setUserInfo = useSetRecoilState(userInfoAtom);

  /* eslint-disable */
  useEffect(() => {
    const token = getToken();

    (async () => {
      if (token) {
        const result = await userMeApi(token);
        setUserInfo(result);
      } else {
        await wakeUpServer();
      }
    })();
  }, []);
  /* eslint-enable */
}
