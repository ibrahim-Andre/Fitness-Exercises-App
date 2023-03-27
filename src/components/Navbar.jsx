import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "20px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "50px", height: "50px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontsize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1278",
            borderBottom: "3px solid #FF2625",
          }}>
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1278" }}>
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
