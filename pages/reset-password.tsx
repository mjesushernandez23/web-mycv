import { NextPage } from "next";
import { useRouter } from "next/router";

const ResetPassword: NextPage = () => {
  const { query, push } = useRouter();

  if (!query?.code) {
    console.log(query);
  }

  return <div>ResetPassword</div>;
};

export default ResetPassword;
