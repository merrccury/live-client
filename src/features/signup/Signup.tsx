import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
import { TextInput } from "../../components/input/TextInput";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ButtonUnstyled } from "@mui/base";
import { natural } from "../../components/styles";
import { BasicSwitch } from "../../components/switch/Switch";
import { SubmitButton } from "../../components/submitButton/SubmitButton";
import { useFormik } from "formik";
import { ISignupForm, State } from "./interfaces";
import { IconButton, InputAdornment } from "./helperComponents";
import { signupValidationSchema } from "./validation";
import { isEmpty } from "lodash";
import { cssTransition, toast, ToastContainer } from "react-toastify";

const fade = cssTransition({
  enter: "animate__animated animate__fadeIn",
  exit: "animate__animated animate__fadeOutRight",
});

export const SignUp = () => {
  const [values, setValues] = React.useState<State>({
    showPassword: false,
  });

  const [blurState, setBlurState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const setBlur = (field: keyof typeof blurState) => {
    const focus: typeof blurState = { ...blurState };
    focus[field] = !isEmpty(formik.errors);
    setBlurState(focus);
  };
  const formik = useFormik<ISignupForm>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreement: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: signupValidationSchema,
    validateOnBlur: true,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  useEffect(() => {
    console.log(blurState);
  }, [blurState]);

  return (
    <div>
      <Link className={style["start-free"]} to="/signup">
        Start for free
      </Link>
      <h1 className={style["heading"]}>Create new account</h1>

      <Container
        maxWidth={"sm"}
        style={{ padding: 0 }}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container rowSpacing={2} columns={12}>
            <Grid item xs={5}>
              <TextInput
                style={{
                  borderColor:
                    blurState.firstName && formik.errors.firstName
                      ? "#dd3d32"
                      : "",
                }}
                onBlur={() => setBlur("firstName")}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                name={"firstName"}
                placeholder="First name"
                errorMessage={
                  formik.errors.firstName && blurState.firstName
                    ? formik.errors.firstName
                    : undefined
                }
              />
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={5}>
              <TextInput
                style={{
                  borderColor:
                    blurState.lastName && formik.errors.lastName
                      ? "#dd3d32"
                      : "",
                }}
                onBlur={() => setBlur("lastName")}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                name={"lastName"}
                placeholder="Last name"
                errorMessage={
                  formik.errors.lastName && blurState.lastName
                    ? formik.errors.lastName
                    : undefined
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                style={{
                  borderColor:
                    blurState.email && formik.errors.email ? "#dd3d32" : "",
                }}
                onBlur={() => setBlur("email")}
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                name={"email"}
                errorMessage={
                  formik.errors.email && blurState.email
                    ? formik.errors.email
                    : undefined
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                style={{
                  borderColor:
                    blurState.password && formik.errors.password
                      ? "#dd3d32"
                      : "",
                }}
                onBlur={() => setBlur("password")}
                endAdornment={
                  <InputAdornment>
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {values.showPassword ? (
                        <VisibilityOff
                          style={{ height: 17, color: natural[60] }}
                        />
                      ) : (
                        <Visibility
                          style={{ height: 17, color: natural[60] }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Password"
                type={values.showPassword ? "text" : "password"}
                name={"password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                errorMessage={
                  formik.errors.password && blurState.password
                    ? formik.errors.password
                    : undefined
                }
              />
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BasicSwitch
                onChange={formik.handleChange}
                checked={formik.values.agreement}
                name={"agreement"}
              />
            </Grid>
            <Grid item xs={10} className={style["text"]}>
              <p>
                I agree with &nbsp;
                <Link className={style["link"]} to={"/term-of-service"}>
                  Terms of Service
                </Link>
                &nbsp; and &nbsp;
                <Link className={style["link"]} to={"/privacy-policy"}>
                  Privacy Policy
                </Link>
              </p>
            </Grid>
            <Grid item xs={12}>
              <SubmitButton
                type={"submit"}
                disabled={
                  !isEmpty(formik.errors) ||
                  !(formik.values.firstName.length > 0)
                }
              >
                Register
              </SubmitButton>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ justifyContent: "center" }}
              className={style["text"]}
            >
              <p>
                Already a Member? &nbsp;
                <Link className={style["link"]} to={"/login"}>
                  Login
                </Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};
