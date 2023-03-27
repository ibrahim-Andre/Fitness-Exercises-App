import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center">
        Awesome Exercises You <br />
        Should Now
      </Typography>
      <Box position='relative' mb='72px'></Box>
    </Stack>
  );
};

export default SearchExercises;
