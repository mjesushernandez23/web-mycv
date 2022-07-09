import { useEffect } from "react";
import { userInfoAtom } from "@store/userAtoms";
import { useSetRecoilState } from "recoil";
import { userMeApi } from "@api/userApi";
import { resumeAtom } from "@store/resumeAtoms";
import getMyCvApi from "@api/getMyCvApi";

export default function useRememberSession(): void {
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const setResume = useSetRecoilState(resumeAtom);

  /* eslint-disable */
  useEffect(() => {
    (async () => {
      const resultUserInfo = await userMeApi();
      setUserInfo(resultUserInfo);
      const resultResume = await getMyCvApi();
      setResume(resultResume);
    })();
  }, []);
  /* eslint-enable */
}
