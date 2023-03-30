import { Avatar, AvatarGroup, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  CellSignalHigh,
  HandsClapping,
  Playlist,
  SpeakerHigh,
} from "phosphor-react";
import { Box } from "@mui/system";
import { faker } from "@faker-js/faker";
import { useMediaQuery } from "@mui/material";

export const NewLevel2 = () => {
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: isNonMobileScreen ? " 500" : "800px",
        paddingRight: isNonMobileScreen ? 10 : 0,
      }}
      backgroundColor="rgb(255,255,255)"
    >
      {/* This stack will do */}
      <Stack direction={isNonMobileScreen ? "row" : " column"} alignContent="left">
        {/* BOX ONE  */}
        <Box
          sx={{
            width: "100%",
            height: "50%",
          }}
          backgroundColor="rgb(255,255,255)"
        >
          <Stack spacing={3}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                pt: 5,
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              High quality video, audio & live classes
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
          </Stack>

          {/* SUB BOX 1 */}

          <Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{
                pt: 5,
              }}
            >
              <Button variant="contained">
                <Typography variant="button" sx={{
                fontSize: "8px",
              }}>View Courses</Typography>
              </Button>
              {/* TYPES OF COURSES */}
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{
                  pt: 5,
                }}
              >
                <Stack
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={4}
                  sx={{
                    pt: 5,
                  }}
                  direction={"row"}
                >
                  {/* ICON 1 */}
                  <Stack direction={"row"}>
                    <SpeakerHigh />
                    <Typography
                      variant="subtitle2"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      Audio classes{" "}
                    </Typography>
                  </Stack>
                  {/* ICON 1 */}
                  <Stack direction={"row"}>
                    <CellSignalHigh />
                    <Typography
                      variant="subtitle2"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      Live classes{" "}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={8}
                  sx={{
                    pt: 5,
                  }}
                  direction={"row"}
                >
                  {/* ICON 3 */}
                  <Stack direction={"row"}>
                    <Playlist />
                    <Typography
                      variant="subtitle2"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      Recorded classes{" "}
                    </Typography>
                  </Stack>
                  {/* ICON 4 */}
                  <Stack direction={"row"}>
                    <HandsClapping />
                    <Typography
                      variant="subtitle2"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      50+ Notes{" "}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          {/* SUB BOX 1 ENDS */}
        </Box>
        {/* BOX ONE  ENDS */}

        {/* BOX 2 STARTS */}
        <Box
          sx={{
            width: "100%",
            height: "50%",
            position: "relative",
            backgroundColor: theme.palette.primary.main,

            paddingRight: isNonMobileScreen ? 20 : 0,
          }}
          backgroundColor="rgb(0,0,0)"
        >
          <Box
            padding={0.5}
            sx={{
              width: 300,
              height: 200,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
              zIndex: 3,
              position: "absolute",
              top: isNonMobileScreen ? "120px" : " 40px",
              left: "30%",
            }}
          >
            <img
              src={faker.image.avatar()}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>

          <Box
            padding={1.3}
            sx={{
              width: "auto",
              height: "auto",
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
              zIndex: 3,
              position: "absolute",
              top: isNonMobileScreen ? "150px" : "80px",
              left: isNonMobileScreen ? "15% " :"5%",
            }}
          >
            <Stack alignItems={"center"}>
              <Typography fontSize="10px">250k+ Enrolled Student</Typography>
              <Stack
                direction={"row"}
                justifyContent="center"
                alignItems="center"
                spacing={0.3}
              >
                <AvatarGroup>
                  <Avatar
                    alt="Remy Sharp"
                    src={faker.image.avatar()}
                    sx={{ width: 24, height: 24 }}
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={faker.image.avatar()}
                    sx={{ width: 24, height: 24 }}
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src={faker.image.avatar()}
                    sx={{ width: 24, height: 24 }}
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src={faker.image.avatar()}
                    sx={{ width: 24, height: 24 }}
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src={faker.image.avatar()}
                    sx={{ width: 24, height: 24 }}
                  />
                </AvatarGroup>
              </Stack>
            </Stack>

          </Box>

          <Box
            padding={0.5}
            sx={{
              width: 200,
              height: 100,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
              zIndex: 3,
              position: "absolute",
              top: isNonMobileScreen ? "250px" : " 170px",
              left: "5%",
            }}
          >
            <img
              src={faker.image.avatar()}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>

        </Box>
        {/* BOX 2 ENDS */}
      </Stack>
    </Box>
  );
};
