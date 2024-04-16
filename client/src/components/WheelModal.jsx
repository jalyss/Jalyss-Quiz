import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Lottie from 'react-lottie';
import party from "../lotties/party.json"
import winner from "../lotties/winnerwinner.json"


const defaultOptionsParty = {
  loop: true,
  autoplay: true,
  animationData: party,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptionsWinner = {
  loop: true,
  autoplay: true,
  animationData: winner,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "72%",
  color: "white",
  padding: "15px",
  boxShadow: 24,
  backgroundColor: "#00b849",
  boxShadow: "0px 0px 10px 5px rgba(0, 255, 0, 0.5)"
};

export default function Wheelmodal({
  handleClose,
  setOpen,
  open,
  prize
}) {
  
  return (
    <div>
    
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
           {prize.slogan? <>{prize.slogan}
            <br/>
            {prize.reward} </>: "حظا موفقا المرة القادمة"}
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
        
             <Lottie 
	    options={defaultOptionsParty}
        height={70}
        width={70}
      />
         
          </Typography>
       
        </Box>
      
      </Modal>

    </div>
  );
}
