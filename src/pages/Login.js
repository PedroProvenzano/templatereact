// React
import React, { useState } from "react";
// Styled
import styled from "styled-components";
// Language
import strings from "../language/language";
// Redux
import { useDispatch } from "react-redux";
// Axios
import axios from "axios";
// Formik & Yup
import { useFormik } from "formik";
import * as Yup from "yup";
// MUI
import {
  Typography,
  TextField,
  OutlinedInput,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// Icons
import { BiShow, BiHide } from "react-icons/bi";
// Api
//import { Account } from "../../Api";
// Spring
import { useSpring, animated } from "react-spring";
// Router
import { useHistory } from "react-router-dom";
// JWT
//import jwt_decode from "jwt-decode";
// SVG
import { ReactSVG } from "react-svg";

const Login = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const loginSchema = Yup.object().shape({
    User: Yup.string()
      .min(4, strings.frm.err.min)
      .required(strings.frm.err.req),
    Password: Yup.string()
      .min(4, strings.frm.err.min)
      .required(strings.frm.err.req),
  });

  const HandleLoading = () => {
    setLoading((prevValue) => !prevValue);
  };

  const HandleLogin = (values) => {
    //HandleLoading();
    console.log(values);
  };

  const HandlePasswordShowClick = () => {
    setShowPass((prevValue) => !prevValue);
  };

  const formik = useFormik({
    initialValues: {
      User: "",
      Password: "",
    },
    validationSchema: loginSchema,
    onSubmit: HandleLogin,
  });

  return (
    <StyDiv style={props}>
      <LoginCont>
        <ReactSVG src="../assets/tea.svg" />
        <Typography style={{ marginBottom: "2rem" }} variant="h5">
          {strings.frm.msg.lgn}
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label={strings.frm.inpt.usr}
          name="User"
          value={formik.values.User}
          onChange={formik.handleChange}
          error={formik.touched.User && Boolean(formik.errors.User)}
          helperText={formik.touched.User && formik.errors.User}
        />
        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
          <InputLabel
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helperText={formik.touched.Password && formik.errors.Password}
            htmlFor="outlined-adornment-password"
          >
            {strings.frm.inpt.pass}
          </InputLabel>
          <OutlinedInput
            fullWidth
            variant="outlined"
            label={strings.frm.inpt.pass}
            type={showPass ? "text" : "password"}
            name="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            Password
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helperText={formik.touched.Password && formik.errors.Password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={HandlePasswordShowClick}>
                  {showPass ? <BiShow /> : <BiHide />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched.Password && Boolean(formik.errors.Password) && (
            <FormHelperText error id="accountId-error">
              {formik.errors.Password}
            </FormHelperText>
          )}
        </FormControl>
        {}
        <LoadingButton
          style={{ textTransform: "none", marginTop: "1rem" }}
          onClick={formik.handleSubmit}
          loading={loading}
          loadingIndicator={strings.btn.load}
          fullWidth
          color="success"
          variant="contained"
        >
          {strings.btn.lgn}
        </LoadingButton>
      </LoginCont>
    </StyDiv>
  );
};

const StyDiv = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 40%;
  padding: 2rem;
  min-width: 350px;
`;
const LogoImg = styled.img`
  width: 70%;
  min-width: 250px;
  height: auto;
  margin-bottom: 3rem;
`;

export default Login;
