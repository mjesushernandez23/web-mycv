import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { messageAlertAtom } from "@store/ui";
import { useRecoilValue } from "recoil";

interface Props {
  show: boolean;
}

const Loading = (props: Props) => {
  const { show } = props;
  const message = useRecoilValue(messageAlertAtom);
  console.log("me", message);
  return (
    <Backdrop open={show}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
