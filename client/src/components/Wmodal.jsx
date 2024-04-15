import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  color:"white",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "72%",
 padding: "15px",
  boxShadow: 24,
 backgroundColor: "#ff142b",

boxShadow: "0px 0px 10px 5px rgba(255, 20, 43, 0.5)",
 
};

export default function WModal({handleClose,open}) {
 

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{textAlign:"center",fontSize:30}} >
          شكرا لمشاركتك معنا ❤ نتمنى لك حظا موفق في المرة القادمة . انقر لزيارة موقعنا
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 ,textAlign:"center"}}>
          <a href="http://jalyss.com" className="btn btn-light fs-5">موقع جليسكم{">"}</a>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
