import { Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import ControlledAccordions from "./accordion";
import {useMediaQuery }from "@mui/material";
export const Level7 = () => {
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
          backgroundColor: theme.palette.secondary.contrastText,
          width: "100%",
          height: "auto"
        }}
      >
        <Box
        marginLeft={isNonMobileScreen ? 20 : 3}
        marginRight={isNonMobileScreen ? 20 : 3}
        >
        <Typography
          variant="h5"
          align="center"
          sx={{
            pt: 5,
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Frequently Asked Questions
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
        <Typography
          variant="subtitle2"
          align="left"
          style={{
            color: "blue",
            
            
          }}
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            pt:5,
          }}
        >
            Is there a free trial available?
        </Typography>
        <Typography
          variant="subtitle2"
          align="left"
          style={{
            color: "powderblue",
          }}
          sx={{
            fontWeight: "bold",
            fontSize: "10px",
            pb:3,
            pt:2,

          }}
        >
          High Definition video is Video of Higher Resolution And Quality Than
          Standard Definition. While There is No Standard Meaning For High
          Definition, Generally Any Standard Video Image
        </Typography>
      
        < ControlledAccordions/>
        </Box>
      </Box>
    </Stack>
  );
};
