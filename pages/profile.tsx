import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { userInfoAtom } from "@store/userAtoms";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import useAuth from "@hooks/useAuth";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import FormCreateConference from "@components/forms/FormCreateConference";

const ProfilePage: NextPage = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const router = useRouter();
  /* eslint-disable */
  useEffect(() => {
    userInfo === null && router.push("/");
  }, []);
  /* eslint-enable */

  const [showForm, setShowForm] = useState<boolean>(false);
  const { handleLogout } = useAuth();

  if (userInfo === null) return <>Loading...</>;

  const { _id, firstName, lastName } = userInfo;

  const handleShowForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <div className="p-4">
      <Typography variant="h5" align="center">
        Hola {`${firstName} ${lastName}`}
      </Typography>
      <Typography variant="subtitle1" className="my-4 text-center">
        Gracias por tu interés,
        <br /> estoy emocionado de poder concretar una cita.
      </Typography>
      <Collapse in={showForm} unmountOnExit>
        <FormCreateConference _id={_id} />
      </Collapse>

      <div className="my-4 w-full flex justify-center">
        <Button
          onClick={handleShowForm}
          className="mb-4 transition-transform duration-1000"
          endIcon={
            <ExpandLessIcon
              className={`${
                showForm ? "rotate-0" : "rotate-180"
              } origin-center transition-transform`}
            />
          }
        >
          {showForm ? "Cerrar" : "Agenda una cita"}
        </Button>
      </div>

      {!showForm && (
        <div className="my-4 w-full flex  justify-center">
          <Button onClick={handleLogout}>Cerrar sesión</Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
