import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import RoomIcon from "@mui/icons-material/Room";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import { ThemeProvider, createTheme } from "@mui/material/styles";
/**
 * FooterComponent
 */
const theme = createTheme({
  components: {
    // Name of the component
    MuiBottomNavigation: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          "background-color": "#1976d2",
        },
      },
    },
  },
});
export const Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
          <BottomNavigationAction label="Favorites" icon={<RoomIcon />} />
          <BottomNavigationAction label="Nearby" icon={<WbCloudyIcon />} />
        </BottomNavigation>
      </ThemeProvider>
    </>
  );
};
