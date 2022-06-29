import { Suspense, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NoSsr } from "@mui/material";
import { useRecoilValue } from "recoil";
import { isLoadingAtom } from "@store/uiAtoms";
import { userInfoAtom } from "@store/userAtoms";
import { LinksDesktop, LinksMobile } from "./Links";
import useRememberSession from "@hooks/useRememberSession";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("./Loading"), {
  ssr: false,
  suspense: true,
});

interface Props {
  children: JSX.Element;
  window?: () => Window;
}

const navItems = [
  { route: "", label: "Inicio" },
  { route: "about", label: "Acerca de mi", prefetch: true },
  { route: "login", label: "Acceso" },
  { route: "profile", label: "Perfil" },
];

const Layout = (props: Props) => {
  const { children, window } = props;
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
                Cv <br /> Jesús <br /> Hernández
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
