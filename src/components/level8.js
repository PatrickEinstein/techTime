import { Box, FormControl, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import InputAdornments from "./input";
import {useMediaQuery }from "@mui/material";
export const Level8 = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)")
  
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        padding: 3,
      }}
    >
      <Box
        padding={3}
        pb={10}
        sx={{
          width: "100%",
          height: "auto",
        }}
        backgroundColor="rgb(0,0,0)"
      >
        <Stack direction={isNonMobileScreen ? "row" : " column"} 
      justifyContent="space-between"
      
      spacing={2}
      sx={{
        padding: 3,
      
      }}
    >
        <Stack>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 5,
            fontWeight: "bold",
            fontSize: "25px",
          }}
          color={theme.palette.secondary.contrastText}
        >
          Tech Time
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 5,
            fontWeight: "bold",
            fontSize: "18px",
          }}
          color={theme.palette.secondary.contrastText}
        >
          Reach out to us on any of our social media networks
        </Typography>
        <Stack direction={"row"}>
          <IconButton color="warning"  size="large">
            <FacebookLogo />
          </IconButton>
          <IconButton color="warning"  size="large"> 
            <TwitterLogo />
          </IconButton>
          <IconButton color="warning"  size="large">
           
            <InstagramLogo />
          </IconButton >
          <IconButton color="warning"  size="large">
                <YoutubeLogo/>
            </IconButton>
          <IconButton color="warning"  size="large">
          <DiscordLogo/>
          </IconButton>
        </Stack>
        </Stack>

        <Stack>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 5,
            fontWeight: "bold",
            fontSize: isNonMobileScreen ?"20px" : "40px"
          }}
          color={theme.palette.secondary.contrastText}
        >
         Useful Links
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 3,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
        Home
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         About Us
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Our Courses
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Testimonials
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Our Community
        </Typography>
        </Stack>

        <Stack>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 5,
            fontWeight: "bold",
            fontSize: isNonMobileScreen ?"20px" : "40px"
          }}
          color={theme.palette.secondary.contrastText}
        >
         Community
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
        Help Centers
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Connections
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Suggestion
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Blog
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{
            pt: 1,
            
            fontSize: "20px",
          }}
          color={theme.palette.secondary.contrastText}
        >
         Newsletter
        </Typography>
        </Stack>
        <Stack>
        <Typography
        variant="h5"
          align="left"
          sx={{
            pt: 5,
            fontWeight: "bold",
            fontSize: isNonMobileScreen ?"20px" : "40px"
          }}
          color={theme.palette.secondary.contrastText}
        >
         Subscribe Us
        </Typography>
        <InputAdornments/>
        </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
