import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { MenuBookOutlined, MenuOutlined } from "@mui/icons-material";
import { NavbarPc } from "./navbarpc";

export const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(0);

  const isNonMobileScreen = useMediaQuery("(min-width:900px)");
  const theme = useTheme();
  return (
    <Stack
      justifyContent="space-between"
      spacing={8}
      direction="row"
      padding={3}
      paddingRight={5}
      paddingLeft={5}
     sx={{
      backgroundColor: theme.palette.secondary.light 
  
     }}    >
      <box>
        <Typography
          variant="h5"
          align="left"
          sx={{
            fontWeight: "bold",
            fontSize: "15px",
          }}
          color={theme.palette.secondary.contrastText}
        >
          Tech Time
        </Typography>
      </box>

      <Box>
        {isNonMobileScreen ? (
          <NavbarPc />
        ) : (
          <IconButton onClick={() => setOpenNavbar((prev) => !prev)}>
            <MenuOutlined />
          </IconButton>
        )}
      </Box>

      {
        openNavbar ?
        <Box
        sx={{
          position : "absolute",
          top : 100,
          right : 20,
         
        }}
        backgroundColor={theme.palette.secondary.light }
        >
          <NavbarPc/>
        </Box>

        :

        ""
      }
    </Stack>
  );
};
