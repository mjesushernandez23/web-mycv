import { useRecoilState, useSetRecoilState } from "recoil";
import { isLoadingAtom, messageAlertAtom } from "@store/uiAtoms";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import getVariantMessage from "@utils/getVariantMessage";

interface Props {
  show: boolean;
}

const Loading = (props: Props) => {
  const { show } = props;
  const setLoading = useSetRecoilState(isLoadingAtom);
  const [messageError, setMessageError] = useRecoilState(messageAlertAtom);
  const { message, statusCode } = messageError;

  const handleCleanMessage = (): void => {
    setMessageError({ message: "", statusCode: 0 });
    setLoading(false);
  };

  return (
    <Backdrop open={show} className="z-drawer">
      {statusCode ? (
        <Alert
          variant="filled"
          action={
            <IconButton
              onClick={handleCleanMessage}
              aria-label="close"
              color="inherit"
              size="small"
            >
              <CloseIcon />
            </IconButton>
          }
          severity={getVariantMessage(statusCode) ?? "info"}
        >
          {message}
        </Alert>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </Backdrop>
  );
};

export default Loading;
