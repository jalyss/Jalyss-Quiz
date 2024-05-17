import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineEye,
  AiOutlineLock,
  AiOutlineUnlock
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { addWheelProp, fetchAllWheelProp, updateWheelProp } from "../../../store/wheelProp";
import { buttonColor } from "../../../colors/buttonsColor";

const RewardList = () => {
  const [show, setShow] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const rewards = useSelector((state) => state?.wheelProp);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [locked, setLocked] = useState(false);
  const [selectedProviderId, setSelectedProviderId] = useState("");

  const toggleShow = () => {
    setBasicModal(!basicModal);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #0076CE",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"
  };

  const handleActiveWheelProp = (args) => {
    dispatch(updateWheelProp(args));
  };



  useEffect(() => {
    dispatch(fetchAllWheelProp());
  }, [dispatch]);

  useEffect(() => {
    if (rewards?.wheelprop) {
      let aux = rewards?.wheelprop.map((e) => {
        return {
          id: e.id,
          label: e.label,
          slogan: e.slogan,
          reward: e.reward,
          winners: e.winner?.length,
          isActive: e.isActive
        };
      });
      setRows(aux);
    }
  }, [rewards?.wheelprop]);
  const [open, setOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);

  const [wheelProposition, setWheelProposition] = React.useState({
    "slogan": "",
    "label": "",
    "reward": ""
  });

  const handleSubmit = () => {
    setOpen(false);
  };
  const handleClick = (logo) => {
    setSelectedLogo(logo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const addWheel = async ()=> {
    console.log(wheelProposition)
    try {
      dispatch(addWheelProp(wheelProposition)).then((res)=>{
        handleClose()
        showSuccessToast("wheel has been added")
      }).catch((e)=>showErrorToast(e))
      
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    { field: "label", headerName: "Label", width: 155, editable: false },
    { field: "slogan", headerName: "Slogan", width: 155, editable: false },
    { field: "reward", headerName: "Reward", width: 155, editable: false },
    {
      field: "winners",
      headerName: "Winners",
      width: 155,
      editable: false
    },
    {
      field: "isActive",
      headerName: "Active Status",
      width: 155,
      editable: false
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 155,
      cellClassName: "actions",
      getActions: (params) => {
        const { id, row } = params;
        const { isActive } = row;
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
          />,
          <>
            {" "}
            {!isActive ? (
              <GridActionsCellItem
                icon={<AiOutlineLock />}
                label="lock"
                onClick={() => {
                  toggleShow();
                  setSelectedProviderId(id);
                  handleActiveWheelProp({ id: id, body: { isActive: true } });
                }}
                color="error"
              />
            ) : (
              <GridActionsCellItem
                icon={<AiOutlineUnlock />}
                label="unlock"
                onClick={() => {
                  toggleShow();
                  setSelectedProviderId(id);
                  handleActiveWheelProp({ id: id, body: { isActive: false } });
                }}
                color="success"
              />
            )}
          </>
        ];
      }
    }
  ];

  return (
    <div>
      <div>
        <div className="container">
          <h2 style={{ paddingLeft: 10, paddingTop: 10 }}>Rewards</h2>
          <hr />
          <button
            className="btn btn-primary mb-5"
            style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
            onClick={() => setOpen(true)}
          >
            Add Reward
          </button>
{/* modal  */}
          <Modal
            keepMounted
            open={open}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer"
                }}
                onClick={handleClose}
              >
                <CloseIcon
                  style={{
                    color: "white",
                    backgroundColor: "#0076CE",
                    borderRadius: "10px",
                    padding: "4px"
                  }}
                />
              </Box>

              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center", mb: 2 }}
              >
                Add Reward
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    id="outlined-basic"
                    label="slogan"
                    onChange={(e) => {
                      setWheelProposition((prev) => {
                        return { ...prev, slogan: e.target.value };
                      });
                    }}
                    variant="outlined"
                    sx={{ width: "50%" }}
                  />
                  <Autocomplete
                    onChange={(event, value) => {
                      setWheelProposition((prev) => {
                        return { ...prev, label: value.name };
                      });
                    }}
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.name}
                    options={[
                      { name: "لغة الاتصال الجسدي" },
                      { name: "لغة اعطاء الهدايا " },
                      { name: "لغة كلمات الشكر والمدح" },
                      { name: "لغة الوقت الجيد" },
                      { name: "لغة أفعال الخدمة" }
                    ]}
                    sx={{ width: "50%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="label" />
                    )}
                  />
                </Box>

                <TextField
                  id="outlined-basic"
                  label="Reward"
                  onChange={(e) => {
                    setWheelProposition((prev) => {
                      return { ...prev, reward: e.target.value };
                    });
                  }}
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Button className="btn btn-primary w-100 mt-3" onClick={addWheel} >Save</Button>
            </Box>
          </Modal>
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
    </div>
  );
};

export default RewardList;
