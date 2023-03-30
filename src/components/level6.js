import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { faker } from "@faker-js/faker";
import Avatar from "@mui/material/Avatar";
import {useMediaQuery }from "@mui/material";

export const Level6 = () => {
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
        sx={{
          position: "relative",
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          height: 600,
        }}
      >
        <Stack>
          <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
              pt: 3,
              pr: 4,
              pl: 4,
              fontSize: "13px",
            }}
          >
            JOIN OUR COMMUNITY
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
              pr: 1,
              pl: 1,
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Are you ready to connect with the future talent of the tech world
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color={theme.palette.secondary.contrastText}
            sx={{
              pr: 4,
              pl: 4,
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Meet up With Other Techstarts And grow Together
          </Typography>
        </Stack>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "60%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "70%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "5%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "30%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "70%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "80%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "90%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "40%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "30%",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: isNonMobileScreen ? "45%" : "25%",
          }}
        >
        <Button variant="contained" color="info" 
        style={{
            backgroundColor:"white"
            
        }}
        >
        <Typography 
        sx={{
            
          fontWeight: "bold",
          fontSize: "10px",
        }}
        style={{
            color: "blue",
          }}
        >
            Join Our Community 
        </Typography>
      </Button>
      </Box>
      </Box>
      
    </Stack>
  );
};
