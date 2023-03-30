import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { GraduationCap } from "phosphor-react";
import { Features } from "./data";
import { useMediaQuery } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Level3 = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={1}
      backgroundColor="white"
      direction={isNonMobileScreen ? "row" : "column"}
    >
      <Box
        padding={0.5}
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 3,
        }}
      >
        <Stack justifyContent="center" alignItems="center" spacing={5}>
          <Box
            padding={0.5}
            sx={{
              width: "100%",
              height: "100%",
              zIndex: 3,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                pt: 1,
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              This is Why We Are Best From Others
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
              High Definition video is Video of Higher Resolution And Quality
              Than Standard Definition. While There is No Standard Meaning For
              High Definition, Generally Any Standard Video Image
            </Typography>
          </Box>

          <Box
            padding={1}
            sx={{
              width: "90%",
              height: 300,
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",

              borderRadius: 2,
            }}
          >
            <img src={faker.image.avatar()} height="100%" width="100%" />
          </Box>
        </Stack>
      </Box>
      <Box
        padding={0.5}
        sx={{
          width: "100%",
          height: "auto",
          zIndex: 3,
        }}
      >
        <Stack spacing={1}>
          <Box sx={{ flexGrow: 1 }} padding={2}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Features.map(({ logo, Heading, Description }) => (
                <Grid item xs={2} sm={4} md={4} key={logo}>
                  <Item
                    sx={{
                      height: "auto",
                      width: isNonMobileScreen ? "91%" : "80%",
                      mr: 2,
                    }}
                  >
                    <Stack spacing={3}>
                      <Box
                        sx={{
                          width: isNonMobileScreen? "auto" : 50,
                          height: 50,
                          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                          backgroundColor: theme.palette.primary.main,
                          borderRadius: 2,
                        }}
                      >
                        {" "}
                        <Stack
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            pt: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 25,
                              height: 25,
                              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                              backgroundColor: theme.palette.primary.light,
                              borderRadius: 2,
                            }}
                          >
                            {logo}
                          </Box>
                        </Stack>
                      </Box>
                      <Typography align="left">{Heading}</Typography>

                      <Typography align="left">{Description}</Typography>
                    </Stack>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
