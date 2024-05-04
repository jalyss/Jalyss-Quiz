import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import jalyss from "../assets/images/jalyss.png";

import { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "react-bootstrap/Modal";
import { createPartcipant } from "../store/participantSlice";
import { showErrorToast } from "../utils/toast";
import Spinner from "react-bootstrap/Spinner";



const defaultTheme = createTheme();
export default function Formulaire() {
  const dispatch = useDispatch();

  const [candidateInfo, setCandidateInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
    work: "",
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
      createPartcipant({
        email: candidateInfo.email,
        fullName: candidateInfo.fullName,
        phoneNumber: candidateInfo.phoneNumber,
        birthday: candidateInfo.birthday,
        work: candidateInfo.work,
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
            backgroundPosition: "center left",
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
        >
          <div
            className="position-fixed w-100 h-100 d-md-none"
            style={{
              backgroundImage: `url(${jalyss})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center left",
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                padding: 5,
                borderRadius: 3,
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
                  id="age"
                  label="الإسم و اللقب"
                  name="fullName"
                  value={candidateInfo.fullName}
                  autoComplete="age"
                  autoFocus
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
                    direction: "rtl",
                  }}
                  onChange={handleInputChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      dir="rtl"
                      fullWidth
                      label="تاريج الميلاد"
                      sx={{
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "purple",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "purple",
                          },
                        width: "100%",
                      }}
                      onChange={handleInputChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phoneNumber"
                  value={candidateInfo.phoneNumber}
                  label="رقم الهاتف"
                  type="number"
                  id="tel"
                  autoComplete="current-tel"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
                  }}
                  onChange={handleInputChange}
                />
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
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
                  }}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="work"
                  value={candidateInfo.work}
                  label="المهنة"
                  type="text"
                  id="work"
                  autoComplete="current-email"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
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
                  {disableButton&&<Spinner animation="border" />} سجل
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
                borderRadius: 3,
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
                  id="age"
                  label="الإسم و اللقب"
                  name="fullName"
                  value={candidateInfo.fullName}
                  autoComplete="age"
                  autoFocus
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
                    direction: "rtl",
                  }}
                  onChange={handleInputChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      dir="rtl"
                      fullWidth
                      label="تاريج الميلاد"
                      sx={{
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "purple",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "purple",
                          },
                        width: "100%",
                      }}
                      onChange={handleInputChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phoneNumber"
                  value={candidateInfo.phoneNumber}
                  label="رقم الهاتف"
                  type="number"
                  id="tel"
                  autoComplete="current-tel"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
                  }}
                  onChange={handleInputChange}
                />
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
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
                  }}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="work"
                  value={candidateInfo.work}
                  label="المهنة"
                  type="text"
                  id="work"
                  autoComplete="current-email"
                  dir="rtl"
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "purple",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "purple",
                      },
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
