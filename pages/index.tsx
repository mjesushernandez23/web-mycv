import type { NextPage } from "next";
import Button from "@mui/material/Button";
import MyUpload from "@components/ui/MyUpload";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const acceptFormat = [
  { icon: <PictureAsPdfIcon />, extension: "pdf" },
  { icon: <FolderZipIcon />, extension: "zip" },
];

const Home: NextPage = () => {
  return (
    <div className="">
      <MyUpload
        name="test"
        acceptFormat={acceptFormat}
        onUpload={(values: FileList) => {
          console.log(values);
        }}
        multiple
      />
    </div>
  );
};

export default Home;
