import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { AiFillDelete, AiFillEdit, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { fetchAdmins } from "../../../store/admins";
import Modal from "react-bootstrap/Modal";

const AdminsList = () => {
  const [show, setShow] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const adminProvider = useSelector((state) => state?.admins);
  console.log(adminProvider, "this is admins");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [selectedProviderId, setSelectedProviderId] = useState("");
  const [adminInfo, setAdminInfo] = useState({
    fullName: "",
    password: "",
    email: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCandidateInfo({ ...candidateInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();    
    await dispatch(
      createPartcipant({
        email: adminInfo.email,
        fullName: adminInfo.fullName,
        password : adminInfo.password
      })
    ).then((res) => {
      if (res.error) {
        console.log(res);
        showErrorToast("الرجاء التثبت من البربد الاكتروني");
        setDisableButton(false);
      }
    });
  };

  const toggleShow = () => {
    setBasicModal(!basicModal);
  };

  const handleClose = () => setShow(false);

  const handleDeleteProviderClick = () => {
    //   dispatch(removeProvider(selectedProviderId)).then(res => {
    //     if (res.error) {
    //       showErrorToast(res.error.message)
    //     } else {
    //       showSuccessToast('Provider has been deleted')
    //       toggleShow()
    //     }
    //   })
  };

  useEffect(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);

  useEffect(() => {
    if (adminProvider?.admins) {
      let aux = adminProvider?.admins.map((e) => {
        return {
          id: e.id,
          fullName: e.fullName,
          email: e.email
        };
      });
      setRows(aux);
    }
  }, [adminProvider?.admins]);
  const [open, setOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleClick = (logo) => {
    setSelectedLogo(logo);
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const columns = [
    { field: "fullName", headerName: "FullName", width: 155, editable: false },
    { field: "email", headerName: "Email", width: 155, editable: false },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 155,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<AiOutlineEye />}
            label="Add"
            className="textPrimary"
            onClick={() => navigate(`detail/${id}`)}
            color="success"
          />,
          <GridActionsCellItem
            icon={<AiFillDelete />}
            label="Delete"
            onClick={() => {
              toggleShow();
              setSelectedProviderId(id);
            }}
            color="error"
          />
        ];
      }
    }
  ];

  return (
    <div>
      <div>
        <div className="container">
          <h2 style={{ paddingLeft: 10, paddingTop: 10 }}>Admins</h2>
          <hr />
          <button
            className="btn btn-primary mb-5"
            style={{ backgroundColor: "#4C1040", borderColor: "#4C1050" }}
            onClick={() => setShow(true)}
          >
            Add Admin{" "}
          </button>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10
                  }
                }
              }}
              pageSizeOptions={[10]}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body style={{ padding: 30 }}>
            <p className="text-center fs-4 text-">Add Admin</p>
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="الإسم و اللقب"
              name="fullName"
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
              // onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              type="email"
              fullWidth
              id="email"
              label="البريد الإلكتروني "
              name="email"
              autoComplete="email"
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
              // onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              type="password"
              fullWidth
              id="password"
              label="كلمة السر "
              name="password"
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
              // onChange={handleInputChange}
            />
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
            <Button
              variant="light  "
              className="btn"
              style={{ borderColor: "#48184c", color: "#48184c" }}
              onClick={handleClose}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AdminsList;
