import { MenuOutlined } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const NavbarPc = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:900px)");
  const theme = useTheme();
  return (
    <>
      <Stack direction={isNonMobileScreen ? "row" : "column"} spacing={isNonMobileScreen? 3 : 8}>
        <Typography
          color={theme.palette.secondary.contrastText}
          sx={{
            fontWeight: "bold",
          }}
          fontSize={isNonMobileScreen ? "30" : "8"}
        >
          Home
        </Typography>
        <Typography
          color={theme.palette.secondary.contrastText}
          fontSize={isNonMobileScreen ? "30" : "8"}
        >
          About Us
        </Typography>
        <Typography
          color={theme.palette.secondary.contrastText}
          fontSize={isNonMobileScreen ? "30" : "8"}
        >
          Message
        </Typography>
        <Typography
          color={theme.palette.secondary.contrastText}
          fontSize={isNonMobileScreen ? "30" : "8"}
        >
          Community
        </Typography>
        <Button
          variant="contained"
          color="info"
          style={{
            backgroundColor: "white",
          }}
          size="small"
        >
          <Typography
            variant="subtitle2"
            color={theme.palette.primary.main}
            fontSize={isNonMobileScreen ? "30" : "8"}
          >
            Enroll now
          </Typography>
        </Button>
      </Stack>
    </>
  );
};
