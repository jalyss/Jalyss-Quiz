import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "92%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "72%",
 padding: "15px",
  boxShadow: 24,
 backgroundColor: "#00b849",

boxShadow: "0px 0px 10px 5px rgba(0, 255, 0, 0.5)",
 
};

export default function Rmodal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}} >
           Sorry, Your answer is not correct
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 ,textAlign:"center"}}>
           Try again next time
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
