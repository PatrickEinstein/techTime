import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Features } from "./data";
import { Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTheme } from "@mui/material/styles";

const MainCarousel = () => {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  return (
    <Stack justifyContent="center" alignItems="center">
     <Box
        
        sx={{
          
          width: "100%",
        }}
      >
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={60}
        width={"100%"}
        autoPlay={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {Features.map(({ Description, Heading }) => (
          <Box
            key={Heading}
            padding={1}
            pt={10}
            sx={{
              width: isNonMobileScreen? "90%" : "98%",
              height: 250,
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
              backgroundColor: theme.palette.secondary.contrastText,
              borderRadius: 2,

              margin:8
            }}
          >
            {Description}
          </Box>
        ))}
      </Carousel>
      </Box>
    </Stack>
  );
};

export default MainCarousel;
