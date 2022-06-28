import { ChangeEvent, useState, FormEvent, MouseEvent, Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

interface Props {
  acceptFormat: AcceptProps[];
  name: string;
  onUpload: (values: FileList) => void;
  error?: string;
  multiple?: boolean;
}

interface AcceptProps {
  icon: JSX.Element;
  extension: string;
}

const MyUpload = (props: Props) => {
  const { acceptFormat, name, multiple, onUpload, error } = props;
  const [listFiles, setListFiles] = useState<File[] | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const accept = acceptFormat.map(({ extension }) => extension).join(",.");

  const removeItem = (index: number) => {
    if (listFiles === null) return;
    const newListFiles = listFiles.filter((v, i) => i !== index);
    newListFiles.length === 0
      ? (setListFiles(null), setAnchorEl(null))
      : setListFiles(newListFiles);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    setAnchorEl(currentTarget);
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { files } = target;

    if (files === null || files.length === 0) {
      setListFiles(null);
      return;
    }
    const arrayFiles = Object.values(files);
    setListFiles(arrayFiles);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`contained-button-file-${name}`} className="w-fit overflow-hidden">
          <input
            accept={`.${accept}`}
            id={`contained-button-file-${name}`}
            className="hidden"
            multiple={multiple}
            type="file"
            onChange={handleChange}
          />
          <Button
            color={error === undefined ? "primary" : "error"}
            variant="outlined"
            className={`max-w-full w-fit whitespace-nowrap overflow-x-hidden text-ellipsis`}
            component="span"
          >
            {acceptFormat.map(({ icon }, i) => (
              <Fragment key={`icons${i}`}>{icon}</Fragment>
            ))}
          </Button>
        </label>
        {listFiles && (
          <>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-items"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {listFiles.map(({ name }, index) => (
                <MenuItem key={`${name}${index}`} className="justify-between">
                  <span className="w-2/3 whitespace-nowrap text-ellipsis overflow-hidden">
                    {name}
                  </span>
                  <IconButton className="p-0" onClick={() => removeItem(index)}>
                    <RemoveIcon color="error" />
                  </IconButton>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </form>
    </>
  );
};

export default MyUpload;
