import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Link from "next/link";

interface LinksProps {
  route: string;
  label: string;

  _isLogin: boolean;
}

const hiddenLinks = (route: string, _isLogin: boolean): boolean => {
  if (_isLogin && (route === "login" || route === "register")) return true;
  if (!_isLogin && route === "profile") return true;
  return false;
};

export const LinksMobile = ({ route, label, _isLogin }: LinksProps) =>
  hiddenLinks(route, _isLogin) ? (
    <></>
  ) : (
    <ListItem disablePadding>
      <Link href={`/${route}`} passHref>
        <ListItemButton sx={{ textAlign: "center" }} LinkComponent="a">
          <ListItemText primary={label} />
        </ListItemButton>
      </Link>
    </ListItem>
  );

export const LinksDesktop = ({ route, label, _isLogin }: LinksProps) =>
  hiddenLinks(route, _isLogin) ? (
    <></>
  ) : (
    <Link href={`/${route}`} passHref>
      <Button sx={{ color: "#fff" }} LinkComponent="a" variant="text">
        {label}
      </Button>
    </Link>
  );
