// React
import React from "react";
// Styled
import styled from "styled-components";
// Language
import strings from "../language/language";
// Redux
import { useSelector, useDispatch } from "react-redux";
// MUI
import { Paper } from "@mui/material";

const Footer = () => {
  return <StyContenedor elevation={4}>Footer</StyContenedor>;
};

const StyContenedor = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export default Footer;
