import { Box, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import MainCarousel from "./MainCarousel";
import{ useMediaQuery} from "@mui/material";
export const Level5 = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
 
  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <Typography
        variant="h5"
        align="center"
        sx={{
          pt: 10,
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        What Our Clients Are Saying
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        style={{
          color: "powderblue",
        }}
        sx={{
          fontWeight: "bold",
          fontSize: "10px",
        }}
      >
        High Definition video is Video of Higher Resolution And Quality Than
        Standard Definition. While There is No Standard Meaning For High
        Definition, Generally Any Standard Video Image
      </Typography>

      <Box
      sx={{
           width: isNonMobileScreen? "100%%" : "100%"
        }}>
        <MainCarousel />
      </Box>
    </Stack>
  );
};
