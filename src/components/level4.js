import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Courses } from "./data";
import { faker } from "@faker-js/faker";
import styled from "@emotion/styled";
import { BookOpen, Clock } from "phosphor-react";
import {useMediaQuery }from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Level4 = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)")

  return (
    <Stack justifyContent="center" alignItem="center" spacing={2}>
      <Stack justifyContent="space-around" alignItem="center" spacing={2}>
        <Typography
          variant="h5"
          align="center"
          sx={{
            pt: 10,
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Browse Our Popular Courses
        </Typography>

        <Stack
          direction={"row"}
          justifyContent="space-around"
          alignItem="space-around"
          spacing={1}
          sx={{
            justifyContent:"space-around",
            alignItems:"space-around"
          }}
        >
          <Button variant="outlined" color="info" 
        style={{
            backgroundColor:"white"
        }}
        >
         <Typography
            variant="h6"
            align="left"
            color="blue"
            sx={{
              fontSize: "10px",
            }}
          >   Categories
        </Typography>
      </Button>
      <Button variant="outlined" color="info" 
        style={{
            backgroundColor:"white"
        }}
        >
         <Typography
            variant="h5"
            align="center"
            color="blue"
            sx={{
              fontSize: "10px",
            }}
          >    Design
        </Typography>
      </Button>
      <Button variant="outlined" color="info" 
        style={{
            backgroundColor:"white"
        }}
        >
         <Typography
            variant="h5"
            align="center"
            color="blue"
            sx={{
              fontSize: "10px",
            }}
          >    Development
        </Typography>
      </Button>
      <Button variant="outlined" color="info" 
        style={{
            backgroundColor:"white"
        }}
        >
         <Typography
            variant="h5"
            align="center"
            color="blue"
            sx={{
              fontSize: "10px",
            }}
          >   Marketing
        </Typography>
      </Button>
        </Stack>
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            pl: 5,
            pr: 5,
          }}
        >
          High Definition video is Video of Higher Resolution And Quality Than
          Standard Definition. While There is No Standard Meaning For High
          Definition, Generally Any Standard Video Image
        </Typography>
      </Stack>
      <Stack>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <Box sx={{ flexGrow: 1 }} padding={1}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Courses.map(({ Heading, image, Price, title }) => (
                <Grid item xs={2} sm={4} md={4} key={Price}>
                  <Item
                    theme={theme}
                    sx={{
                      height: isNonMobileScreen ? "auto" : " auto",
                      padding:"0px"
                    }}
                  >
                    <Stack spacing={3}>
              
                        <img src={image} height="40%" width="100%" 
                        style={{
                            objectFit:"contain",
                            borderRadius:" 2",
                        }}
                        />
                     
                      <Typography align="left">{Heading}</Typography>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                      >
                        <Typography align="left">
                          <Clock />
                          22hrs
                        </Typography>
                        <Typography>
                          <BookOpen /> 15 Lessons
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Avatar src={faker.image.avatar()} />
                          <Typography>{faker.name.fullName()}</Typography>
                        </Stack>
                        <Typography>{Price}</Typography>
                      </Stack>
                    </Stack>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Stack>
      <Button variant="contained">
        <Typography sx={{ fontSize: 10 }} variant="button">
          View Courses
        </Typography>
      </Button>
    </Stack>
  );
};
