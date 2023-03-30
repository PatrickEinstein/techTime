import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {useMediaQuery }from "@mui/material";
import { MenuBookOutlined, MenuOutlined } from "@mui/icons-material";


export const Navbar = () => {

    const isNonMobileScreen = useMediaQuery("(min-width:600px)")
  const theme = useTheme();
  return (
    <Stack
      justifyContent="space-between"
      spacing={8}
      direction="row"
      padding={3}
      paddingRight={5}
      paddingLeft={5}
      sx={{ backgroundColor: theme.palette.secondary.light }}
    >
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
        {
            isNonMobileScreen ? 
        
        <Stack direction={"row"} spacing={3}>
          <Typography
            color={theme.palette.secondary.contrastText}
            sx={{
              fontWeight: "bold",
              fontSize: "8px",
            }}
          >
            Home
          </Typography>
          <Typography
            color={theme.palette.secondary.contrastText}
            sx={{
              fontSize: "8px",
            }}
          >
            About Us
          </Typography>
          <Typography color={theme.palette.secondary.contrastText}  sx={{
              fontSize: "8px",
            }}>
            Message
          </Typography>
          <Typography color={theme.palette.secondary.contrastText}  sx={{
              fontSize: "8px",
            }}>
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
              sx={{
                fontSize: "8px",
              }}
            >
              Enroll now
            </Typography>
          </Button>
        </Stack>
:
<IconButton>
    <MenuOutlined/>
</IconButton>
            }
      </Box>
    </Stack>
  );
};
