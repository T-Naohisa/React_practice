import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import RoomIcon from "@mui/icons-material/Room";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";

/**
 * FooterComponent
 */

export const Footer = () => {
  return (
    <>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<RoomIcon />} />
        <BottomNavigationAction label="Nearby" icon={<WbCloudyIcon />} />
      </BottomNavigation>
    </>
  );
};
