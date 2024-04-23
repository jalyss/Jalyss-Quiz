import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { AiFillDelete, AiFillEdit, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { fetchParticipants } from '../../../store/participantSlice';
import { buttonColor } from '../../../colors/buttonsColor';

const ParticipantsList = () => {
    const [show, setShow] = useState(false);
    const [basicModal, setBasicModal] = useState(false);
    const participantsProvider = useSelector((state) => state?.participantSlice);
    console.log(participantsProvider,"those are participants")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [selectedProviderId, setSelectedProviderId] = useState("");
  
    const toggleShow = () => {
      setBasicModal(!basicModal);
    };
  
    
  
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
      dispatch(fetchParticipants());
    }, [dispatch]);
  
    useEffect(() => {
      if (participantsProvider?.participants) {
        let aux = participantsProvider?.participants?.map((e) => {
          return {
            id: e.id,
            fullName: e.fullName,
            email: e.email,
            PhoneNumber: e.phoneNumber,
            birthday: (new Date(e.birthday)).toLocaleDateString("en-Us",{ year: 'numeric', month: 'long', day: 'numeric' }),
            reward: e.WheelProposition?.reward
          };
        });
        setRows(aux);
      }
    }, [participantsProvider?.participants]);
    const [open, setOpen] = useState(false);
    const [selectedLogo, setSelectedLogo] = useState(null);
  
    const handleClick = (logo) => {
      setSelectedLogo(logo);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const columns = [
      
      { field: "fullName", headerName: "fullName", width: 155, editable: false },
      { field: "email", headerName: "Email", width: 155, editable: false },
      { field: "PhoneNumber", headerName: "PhoneNumber", width: 155, editable: false },
      {
        field: "birthday",
        headerName: "Birthday",
        width: 155,
        editable: false,
      },
      { field: "reward", headerName: "Reward", width: 155, editable: false },
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
            />,
          ];
        },
      },
    ];
  
    return (
      <div>
        <div>
          <div className="container">
            <h2 style={{ paddingLeft: 10, paddingTop: 10 }}>Participants</h2>
            <hr />
            <button
             
             className='btn btn-primary mb-5'
             style={{backgroundColor:buttonColor,borderColor:buttonColor}}
              onClick={() => alert("create")}
            >Add Participant </button>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
              />
            </Box>
           
          </div>
        </div>
      </div>
    );
}

export default ParticipantsList
