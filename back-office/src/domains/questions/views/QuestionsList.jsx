import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { AiFillDelete, AiFillEdit, AiOutlineEye,AiOutlineLock,AiOutlineUnlock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, buttonGroupClasses, colors } from "@mui/material";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { fetchQuestions } from "../../../store/questions";
import { buttonColor } from "../../../colors/buttonsColor";

const QuestionsList = () => {
  const [show, setShow] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const questionProvider = useSelector((state) => state?.questions);
  console.log(questionProvider,"those are questions")
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
      dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (questionProvider?.questions) {
      let aux = questionProvider?.questions.map((e) => {
        return {
          id: e.id,
          question: e.question,
          answer: e.answers.find(e=>e.isTrue===true)?.answer,
          Number_of_answers: e.answers.length,
          Level:e.Level.type
        };
      });
      setRows(aux);
    }
  }, [questionProvider?.questions]);
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
    { field: "question", headerName: "Question", width: 155, editable: false },
    {
      field: "answer",
      headerName: "Correct Answer",
      width: 155, 
      editable: false
    },
    {
      field: "Number_of_answers",
      headerName: "N° Answers",
      width: 155,
      editable: false
    },
    {
      field: "Level",
      headerName: "Level",
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
        const {id , row} = params 
        const {isActive} = row
        return [
          <GridActionsCellItem
            icon={<AiOutlineEye />}
            label="Add"
            className="textPrimary"
            onClick={() => navigate(`question/${id}`)}
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
          />, <> {
            !isActive? <GridActionsCellItem
            icon={<AiOutlineLock />}
            label="lock"
            onClick={() => {
              toggleShow();
              setSelectedProviderId(id);
              handleActiveWheelProp({id:id,body : {isActive:true}})
            }}
            color="error"
          /> : <GridActionsCellItem
          icon={<AiOutlineUnlock />}
          label="unlock"
          onClick={() => {
            toggleShow();
            setSelectedProviderId(id);
            handleActiveWheelProp({id:id,body:{isActive:false}})
          }}
          color="success"
        />
          }
          </>
        ];
      }
    }
  ];

  return (
    <div>
      <div>
        <div className="container">
          <h2 style={{ paddingLeft: 10, paddingTop: 10 }}>Questions</h2>
          <hr />
          <button
            className="btn btn-primary mb-5"
            style={{ backgroundColor: buttonColor, borderColor: buttonColor }}
            onClick={() => alert("create")}
          >
            Add Question{" "}
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
    </div>
  );
};

export default QuestionsList;
