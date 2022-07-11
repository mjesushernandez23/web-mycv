import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import RemoveIcon from "@mui/icons-material/Remove";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { MyUploadProps } from "@utils/interfaces/ui";

interface Props extends MyUploadProps {
  acceptFormat: string[];
  name: string;
  multiple?: boolean;
}

const MyUpload = (props: Props) => {
  const { acceptFormat, name, multiple, state, handles } = props;
  const { listFiles, anchorEl } = state;
  const { handleRemoveItem, handleClose, handleClick, handleChange } = handles;

  const open = Boolean(anchorEl);
  const accept = acceptFormat.join(",.");

  return (
    <>
      <label htmlFor={`contained-button-file-${name}`} className="w-fit overflow-hidden">
        <input
          accept={`.${accept}`}
          id={`contained-button-file-${name}`}
          className="hidden"
          multiple={multiple}
          type="file"
          onChange={handleChange}
        />
        <IconButton
          className={`max-w-full w-fit whitespace-nowrap overflow-x-hidden text-ellipsis`}
          component="span"
        >
          <UploadFileIcon />
        </IconButton>
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
                <IconButton className="p-0" onClick={() => handleRemoveItem(index)}>
                  <RemoveIcon color="error" />
                </IconButton>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </>
  );
};

export default MyUpload;
