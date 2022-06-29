import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import Link from "next/link";

interface LinksProps {
  route: string;
  label: string;
  pathName: string;
  _isLogin: boolean;
}

const hiddenLinks = (route: string, _isLogin: boolean): boolean => {
  if (_isLogin && route === "login") return true;
  if (!_isLogin && route === "profile") return true;
  return false;
};

const routeActive = (route: string, pathName: string): boolean =>
  pathName.substring(1) === route ? true : false;

export const LinksMobile = ({ route, label, _isLogin, pathName }: LinksProps) =>
  hiddenLinks(route, _isLogin) ? (
    <></>
  ) : (
    <ListItem disablePadding>
      <Link href={`/${route}`} passHref>
        <ListItemButton
          LinkComponent="a"
          className={`justify-center ${
            routeActive(route, pathName) ? "font-bold underline text-primary-500 opacity-100" : ""
          }`}
        >
          {label}
        </ListItemButton>
      </Link>
    </ListItem>
  );

export const LinksDesktop = ({ route, label, _isLogin, pathName }: LinksProps) =>
  hiddenLinks(route, _isLogin) ? (
    <></>
  ) : (
    <Link href={`/${route}`} passHref>
      <Button sx={{ color: "#fff" }} LinkComponent="a" variant="text">
        {label}
      </Button>
    </Link>
  );
