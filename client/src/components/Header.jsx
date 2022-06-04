import { AppBar, styled, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import React from "react";

const Headeru = styled(AppBar)`
  background-color: green;
  position: static;
`;

const Header = () => {
  return (
    <>
      <Headeru>
        <Toolbar>
          <Menu />
        </Toolbar>
      </Headeru>
    </>
  );
};

export default Header;
