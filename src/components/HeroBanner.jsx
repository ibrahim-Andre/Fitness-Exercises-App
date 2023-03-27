import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Banner from "../assets/images/banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px">
      <Typography color="#FF2625" fontWeight="600" fontsize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px">
        Warm, Repeat
        <br /> and Happy
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5}>
        Review Sample Exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px">
        Exercise
      </Typography>
      <img src={Banner} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
