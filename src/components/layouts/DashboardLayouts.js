import Image from "next/image";
import * as React from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../../public/Images/Logo.png";
import AvatarImage from "../../../public/Images/avatar.png";
import { Avatar, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { navMenu } from "@/constants/navMenu";
import ThemeChange from "@/context/ThemeContext";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function DashboardLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [Loader, setLoader] = React.useState(true);
  const pathname = usePathname();
  const changeTheme = React.useContext(ThemeChange);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  });

  return (
    <>
      <CssBaseline />
      {/* <Box position={'absolute'} width={"100%"} height={"100vh"} top={0} left={0} zIndex={9999} bgColor={mode === "light" ? getTheme(mode).palette.white.main : getTheme(mode).palette.black.dark} display={Loader ? "flex" : "none"} justifyContent={"center"} alignItems={"center"}>
            <Bars
            height="80"
            width="80"
            color={getTheme(mode).palette.primary.main}
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={Loader}
            />
          </Box> */}
      <Box sx={{ display: "flex" }}>
        <ElevationScroll>
          <AppBar color="white" position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Box display={"flex"} flexDirection={"column"} flexGrow={1}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  noWrap
                  component="div"
                >
                  Good Morning Anima
                </Typography>
                <Typography variant="subtitle2">
                  Hope you have a good day
                </Typography>
              </Box>
              <Box>
                <IconButton
                  onClick={() => {
                    changeTheme();
                  }}
                  color="inherit"
                >
                  {theme.palette.mode === "light" ? (
                    <LightModeIcon />
                  ) : (
                    <DarkModeIcon />
                  )}
                </IconButton>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                  <NotificationsNoneIcon />
                </IconButton>
                <IconButton color="inherit">
                  <Avatar alt="img" src={AvatarImage.src} />
                </IconButton>
                <IconButton color="inherit">
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,

            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: theme.palette.secondary,
              border: "none",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <Box
                display={"flex"}
                justifyContent={"start"}
                alignItems={"center"}
              >
                <Image src={Logo} alt="Logo" width={36} />
                <Typography
                  variant="h5"
                  ml={{ md: 2 }}
                  color={"primary"}
                  fontSize={"22px"}
                  fontWeight={700}
                >
                  Teamify
                </Typography>
              </Box>
            </Link>

            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <List sx={{ padding: "15px" }}>
            {navMenu.map((item, index) => {
              if (item.list === "Divider") {
                return <Divider key={index++} />;
              } else {
                return item.list.map((item2) => {
                  let active = pathname && pathname.startsWith(item2.path);
                  return (
                    <ListItem
                      key={item2.id}
                      sx={{
                        my: 1,
                        "& a": { textDecoration: "none", width: "100%" },
                      }}
                      disablePadding
                    >
                      <Link as={item2.path} href={item2.path}>
                        <ListItemButton>
                          <ListItemIcon
                            sx={{
                              color: active
                                ? theme.palette.primary.main
                                : theme.palette.mode === "light"
                                ? theme.palette.black.main
                                : theme.palette.white.main,
                            }}
                          >
                            {item2.icon}
                          </ListItemIcon>
                          <ListItemText
                            sx={{
                              color: active
                                ? theme.palette.primary.main
                                : theme.palette.mode === "light"
                                ? theme.palette.black.main
                                : theme.palette.white.main,
                            }}
                          >
                            {item2.name}
                          </ListItemText>
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  );
                });
              }
            })}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </>
  );
}
