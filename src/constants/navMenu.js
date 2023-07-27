import GridViewIcon from "@mui/icons-material/GridView";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

export const navMenu = [
  {
    list: [
      { id: 1, name: "Dashboard", path: "/dashboard", icon: <GridViewIcon /> },
      {
        id: 2,
        name: "Teams",
        path: "/teams",
        icon: <KeyboardCommandKeyIcon />,
      },
      { id: 3, name: "Employees", path: "/employees", icon: <GroupIcon /> },
      {
        id: 4,
        name: "Projects",
        path: "/projects",
        icon: <WorkOutlineOutlinedIcon />,
      },
    ],
  },
  { list: "Divider" },
  {
    list: [
      {
        id: 5,
        name: "Meetings",
        path: "/meetings",
        icon: <PhoneOutlinedIcon />,
      },
      { id: 6, name: "Tasks", path: "/tasks", icon: <FolderOutlinedIcon /> },
      { id: 7, name: "Settings", path: "/settings", icon: <SettingsIcon /> },
    ],
  },
];
