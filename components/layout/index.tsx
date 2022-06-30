//libraries
import { Suspense, useState } from "react";
import { useRouter } from "next/router";
import { Button, Icon, NoSsr } from "@mui/material";
import { useRecoilValue } from "recoil";
import { isLoadingAtom } from "@store/uiAtoms";
import { userInfoAtom } from "@store/userAtoms";
import dynamic from "next/dynamic";
//components
import { LinksDesktop, LinksMobile } from "./Links";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//hooks
import useRememberSession from "@hooks/useRememberSession";
//icons
import HomeIcon from "@mui/icons-material/Home";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Loading = dynamic(() => import("./Loading"), {
  ssr: false,
  suspense: true,
});

interface Props {
  children: JSX.Element;
  window?: () => Window;
  onChangeTheme: () => void;
  darkMode: boolean;
}

const navItems = [
  { route: "", label: "Inicio", icon: <HomeIcon /> },
  { route: "about", label: "Acerca de mi", icon: <IntegrationInstructionsIcon /> },
  { route: "login", label: "Acceso", icon: <LoginIcon /> },
  { route: "profile", label: "Perfil", icon: <PersonIcon /> },
];

const Layout = (props: Props) => {
  const { children, window, onChangeTheme, darkMode } = props;
  const userInfo = useRecoilValue(userInfoAtom);
  const isLoading = useRecoilValue(isLoadingAtom);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const { pathname } = useRouter();
  useRememberSession();

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
              {navItems.map((props, index) => (
                <LinksDesktop
                  pathName={pathname}
                  key={`linksDesktop-${index}`}
                  _isLogin={Boolean(userInfo)}
                  {...props}
                />
              ))}
            </Box>

            <IconButton onClick={onChangeTheme} color="inherit" className="mr-0 ml-auto">
              {darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
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
              <Typography variant="h6" className="m-4 leading-tight">
                Curriculum de <br />
                Jesús Hernández
              </Typography>
              <Divider />
              <List>
                {navItems.map((props, index) => (
                  <LinksMobile
                    pathName={pathname}
                    key={`linksMobile${index}`}
                    _isLogin={Boolean(userInfo)}
                    {...props}
                  />
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
      <Suspense fallback="">
        <Loading show={isLoading} />
      </Suspense>
    </NoSsr>
  );
};

export default Layout;
