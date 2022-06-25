import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { NoSsr } from "@mui/material";
import Loading from "@components/ui/Loading";
import { useRecoilValue } from "recoil";
import { isLoadingAtom } from "@store/uiAtoms";

interface Props {
  children: JSX.Element;
  window?: () => Window;
}

const navItems = [
  { route: "", label: "Inicio" },
  { route: "about", label: "Acerca de mi" },
  { route: "register", label: "Registro" },
  { route: "login", label: "Acceso" },
];

const Layout = (props: Props) => {
  const { children, window } = props;
  const isLoading = useRecoilValue(isLoadingAtom);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setShowSideBar(prev => !prev);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <NoSsr>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Cv Jesus
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map(({ route, label }, index) => (
                <Link href={`/${route}`} key={`link-${index}`} passHref>
                  <Button sx={{ color: "#fff" }} LinkComponent="a">
                    {label}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={showSideBar}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box" },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                MUI
              </Typography>
              <Divider />
              <List>
                {navItems.map(({ route, label }, index) => (
                  <ListItem key={`slideLinks${index}`} disablePadding>
                    <Link href={`/${route}`} passHref>
                      <ListItemButton sx={{ textAlign: "center" }} LinkComponent="a">
                        <ListItemText primary={label} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
        <Box component="main" className="w-full">
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Loading show={isLoading} />
    </NoSsr>
  );
};

export default Layout;
