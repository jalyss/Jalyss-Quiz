import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Lottie from "react-lottie";
import heart from "../lotties/mraye9.json"
const style = {
  position: "absolute",
  color: "white",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "72%",
  padding: "15px",
  backgroundColor: "#ff142b",

  boxShadow: "0px 0px 10px 5px rgba(255, 20, 43, 0.5)",
};

export default function WModal({ handleClose, open }) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        // onClose={handleClose}
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
               <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: heart,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={200}
                width={200}
                style={{
                  position: "fixed",
                  top: "2%",
                  zIndex: 5,
                }}
              />
            شكرا لمشاركتك معنا ❤ نتمنى لك حظا موفق في المرة القادمة .
            انقر لزيارة موقعنا
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            <button
              className="btn btn-light fs-5"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              العودة الى الرئيسية
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
