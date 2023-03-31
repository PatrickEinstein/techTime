import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { faker } from "@faker-js/faker";
import {

  GoogleLogo,
  SlackLogo,
  StripeLogo,
} from "phosphor-react";

import {useMediaQuery }from "@mui/material";

export const Level1 = () => {
  const theme = useTheme();
const isNonMobileScreen = useMediaQuery("(min-width:900px)")
  return (
    <Stack >
      <Stack
        sx={{ backgroundColor: theme.palette.secondary.light}}
        spacing={2}
        direction={ isNonMobileScreen ? "row" : "column"}
      >
        <Box>
        <Stack spacing={5}>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
              pt: 10,
              pr: 4,
              pl: 4,
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            Grow your skills to advance your career path
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
            
              pr: 4,
              pl: 4,
              
              fontSize: "10px",
            }}
          >
            Build Your fullName with our quality education. The Best And largest All-in-one online Tutoring Platform In the World
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button variant="outlined">
            <Typography variant="subtitle2" fontSize="3" color="white" sx={{
                fontSize: "8px",
              }}>
              Get Started Now
            </Typography>
          </Button>

          <Button
            variant="contained"
            color="info"
            style={{
              backgroundColor: "white",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "8px",
              }}
              color={theme.palette.primary.main}
            >
              Enroll now
            </Typography>
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <AvatarGroup>
            <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
            <Avatar alt="Travis Howard" src={faker.image.avatar()} />
            <Avatar alt="Cindy Baker" src={faker.image.avatar()} />
            <Avatar alt="Agnes Walker" src={faker.image.avatar()} />
            <Avatar alt="Trevor Henderson" src={faker.image.avatar()} />
          </AvatarGroup>
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 15,
                color: theme.palette.secondary.contrastText,
              }}
            >
              255k+
            </Typography>
            <Typography
              sx={{
                color: theme.palette.secondary.contrastText,
              }}
            >
              Previews
            </Typography>
          </Stack>
        </Stack>
        </Stack>
        </Box>
        
        {/* iMAGE  start*/}
        
          <Box
            sx={{
              width: "100%",
              height: 500,
              backgroundColor: "primary.dark",
            }}
          >
            <img src={faker.image.avatar()} width="100%" height="100%" />
          </Box>
        {/* iMAGE  END*/}
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          pt:3,
          pl:2,
          pr:2,
          pb:3
        }}
        spacing={isNonMobileScreen ? "20" : "0"}
      >
         <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
             
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
          {" "}
          Zoom
        </Typography>
        <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
             
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
          {" "}
          <StripeLogo /> Stripe
        </Typography>
        <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
             
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
          <SlackLogo />
          Slack
        </Typography>
        <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
             
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
          <GoogleLogo />
          Zoom
        </Typography>
        <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
             
              fontWeight: "bold",
              fontSize:isNonMobileScreen ? "20px" : "15px",
            }}
          >
          {" "}
          monday
        </Typography>
      </Stack>
    </Stack>
  );
};
