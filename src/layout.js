import { Box, Stack } from "@mui/material";
import React from "react";
import { Level1 } from "./components/level1";

import { Level3 } from "./components/level3";
import { Level4 } from "./components/level4";
import { Level5 } from "./components/level5";
import { Level6 } from "./components/level6";
import { Level7 } from "./components/level7";
import { Level8 } from "./components/level8";
import { useTheme } from "@mui/material";
import { NewLevel2 } from "./components/Level2New";
import { Navbar } from "./components/navbar";

export const Layout = () => {
  const theme = useTheme;
  return (
    <Stack
      style={{
        backgroundColor: "rgb(182, 208, 226)",
        overflow:"hidden"
      }}
    >
      <Navbar />
      <Level1 />
    
      <NewLevel2 />
      <Level3 />
      <Level4 />
      <Level5 />
      <Level6 />
      <Level7 />
      <Level8 />
    </Stack>
  );
};
