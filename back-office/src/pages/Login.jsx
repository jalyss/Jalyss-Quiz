import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import jalyss from "../assets/img/jalyss.png";

import { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "react-bootstrap/Modal";
import { createPartcipant } from "../store/participantSlice";
import { showErrorToast } from "../utils/toast";
import Spinner from "react-bootstrap/Spinner";
import { login } from "../store/auth";
const defaultTheme = createTheme();

function Login() {
  const dispatch = useDispatch();

  const [candidateInfo, setCandidateInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
    work: ""
  });
  const [show, setShow] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const handleClose = () => setShow(false);
  const handleInputChange = (event) => {
    if (event.target?.name) {
      const { name, value } = event.target;
      setCandidateInfo({ ...candidateInfo, [name]: value });
    } else {
      setCandidateInfo({ ...candidateInfo, birthday: event.$d });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisableButton(true);
    if (
      candidateInfo.fullName.trim() === "" ||
      candidateInfo.work.trim() === "" ||
      candidateInfo.phoneNumber.trim() === "" ||
      !candidateInfo.birthday ||
      candidateInfo.email.trim() === ""
    ) {
      setShow(true);
      return;
    }

    await dispatch(
      login({
        email: candidateInfo.email,
        fullName: candidateInfo.fullName,
        phoneNumber: candidateInfo.phoneNumber,
        birthday: candidateInfo.birthday,
        work: candidateInfo.work
      })
    ).then((res) => {
      if (res.error) {
        console.log(res);
        showErrorToast("الرجاء التثبت من البربد الاكتروني");
        setDisableButton(false);
      }
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={0}
          md={7}
          sx={{
            backgroundImage: `url(${jalyss})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center left"
          }}
        />

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
          className="d-flex justify-content-between flex-column"
        >
          <div
            className="position-fixed w-100 h-100 d-md-none "
            style={{
              backgroundImage: `url(${jalyss})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center left"
            }}
          >
            <Box
              sx={{
                my: 10,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                padding: 5,
                borderRadius: 3
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#48184c" }}></Avatar>
              <Typography component="h1" variant="h5">
                سجل الآن 
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  value={candidateInfo.email}
                  label="البريد الإلكتروني "
                  type="email"
                  id="email"
                  autoComplete="current-email"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple"
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple"
                      }
                  }}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="work"
                  value={candidateInfo.work}
                  label="كلمة المرور"
                  type="text"
                  id="work"
                  autoComplete="current-email"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple"
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple"
                      }
                  }}
                  onChange={handleInputChange}
                />

                <button
                  className="btn btn-light w-100 mt-4 "
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#48184c", color: "white" }}
                  onClick={handleSubmit}
                >
                  {disableButton && <Spinner animation="border" />} سجل
                </button>
              </Box>
            </Box>
          </div>
          <div className="d-none d-md-block">
            <Box
              sx={{
                my: 2,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                padding: 5,
                borderRadius: 3
              }}
            >
              <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/307093306_155779117134409_2373459426750840518_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=196OHdnUUYsAb7UV1VE&_nc_ht=scontent.ftun1-2.fna&oh=00_AfCcUwEgsktZfyi5aEcm9N3h_qGHLHptw4CNllSFVjhPlg&oe=662A24B1" alt="logo jalyss" width={100} />
              <Typography component="h1" variant="h5">
                سجل الآن 
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
               

                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  value={candidateInfo.email}
                  label="البريد الإلكتروني "
                  type="email"
                  id="email"
                  autoComplete="current-email"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple"
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple"
                      }
                  }}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="work"
                  value={candidateInfo.work}
                  label="كلمة المرور"
                  type="text"
                  id="work"
                  autoComplete="current-email"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple"
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple"
                      }
                  }}
                  onChange={handleInputChange}
                />

                <button
                  className="btn btn-light w-100 mt-4 "
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#48184c", color: "white" }}
                  onClick={handleSubmit}
                  disabled={disableButton}
                >
                  سجل
                </button>
              </Box>
            </Box>
          </div>
          <div className="d-flex justify-content-center mb-2">

          <img src={require("../assets/img/sfectoria.png")} alt="logo Sfectoria" loading="lazy" width={200}/>
          </div>
        </Grid>
      </Grid>

      <>    
        <Modal show={show} onHide={handleClose}>
          <Modal.Body style={{ padding: 30 }}>
            الرجاء تعمير كل الفراغات
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn"
              style={{ backgroundColor: "#48184c", color: "white" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </ThemeProvider>
  );
}

export default Login;
