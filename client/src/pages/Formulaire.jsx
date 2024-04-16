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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "react-bootstrap/Modal";
import { createPartcipant } from "../store/participantSlice";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function Formulaire() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [candidateInfo, setCandidateInfo] = useState({
    fullName: "",
    age: "",
    tel: "",
    email: "",
    readingTime: ""
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCandidateInfo({ ...candidateInfo, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if required fields are filled out
    if (
      candidateInfo.fullName.trim() === "" ||
      candidateInfo.age.trim() === "" ||
      candidateInfo.tel.trim() === "" ||
      candidateInfo.email.trim() === "" 
    ) {
      // Handle validation error, e.g., display error message or mark required fields
      setShow(true);
      return; // Prevent form submission if validation fails
    }

    // Proceed with form submission
    await dispatch(
      createPartcipant({
        email: candidateInfo.email,
        fullName: candidateInfo.fullName,
        age: +candidateInfo.age,
        PhoneNumber: candidateInfo.tel,
        Reading_Time: candidateInfo.readingTime
      })
    );
    navigate("Questions");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
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

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#48184c" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
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
                    color: "purple"
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "purple"
                    },
                  direction: "rtl"
                }}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="age"
                value={candidateInfo.age}
                label="العمر"
                type="number"
                id="age"
                autoComplete="current-age"
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                     dir="rtl"
                     fullWidth
                    label="تاريج الميلاد"
                    sx={{
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "purple"
                      },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "purple"
                        },
                        width:"100%"
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                margin="normal"
                required
                fullWidth
                name="tel"
                value={candidateInfo.tel}
                label="رقم الهاتف"
                type="number"
                id="tel"
                autoComplete="current-tel"
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
                label="المهنة"
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
                سجل
              </button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

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
