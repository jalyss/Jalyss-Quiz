import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "72%",
  color: "white",
  padding: "15px",
  backgroundColor: "#00b849",

  boxShadow: "0px 0px 10px 5px rgba(0, 255, 0, 0.5)"
};

export default function Rmodal({
  handleClose,
  setClicked,
  clicked,
  setOpen,
  open,
  setProgress,
  setNiveau,
  niveau,
  progress
}) {
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
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center", fontSize: 30 }}
          >
            {niveau!==2?"احسنت 🥳 لقد اصبت ، انقر للتنتقل للمستوى التالي":`ان ستيفن كوفي فخور جدا الان 🥇
انقر لتلعب و تفوز بجائزة`}
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            <button
              onClick={() => {
                niveau<=2&&setNiveau(niveau + 1);
                setProgress(String(Number(progress.slice(0, 2)) + 25) + "%");
                setClicked(!clicked);
                setOpen(!open);
              }}
              className="btn btn-light fs-5"
            >
            {niveau!==2?"السؤال التالي":`العب و اربح مع جليسكم 📚
`} 
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
