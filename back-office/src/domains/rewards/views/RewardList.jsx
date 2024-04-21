import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { AiFillDelete, AiFillEdit, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { fetchAllWheelProp } from '../../../store/wheelProp';

const RewardList = () => {
    const [show, setShow] = useState(false);
    const [basicModal, setBasicModal] = useState(false);
    const rewards = useSelector((state) => state?.wheelProp);
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
            winners: e.winner.length,
            
          };
        });
        setRows(aux);
      }
    }, [rewards?.wheelprop]);
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
    
      { field: "label", headerName: "Label", width: 155, editable: false },
      { field: "slogan", headerName: "Slogan", width: 155, editable: false },
      { field: "reward", headerName: "Reward", width: 155, editable: false },
      {
        field: "winners",
        headerName: "Winners",
        width: 155,
        editable: false,
      },
     
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
            <h2 style={{ paddingLeft: 10, paddingTop: 10 }}>Rewards</h2>
            <hr />
            <button
             
             className='btn btn-primary mb-5'
             style={{backgroundColor:"#4C1040",borderColor:"#4C1050"}}
              onClick={() => alert("create")}
            >Add Reward </button>
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

export default RewardList
