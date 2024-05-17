import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Lottie from "react-lottie";
import party from "../lotties/party.json";
import heart from "../lotties/LoadingHeart.json"

const defaultOptionsParty = {
  loop: true,
  autoplay: true,
  animationData: party,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Wheelmodal({ handleClose, open, prize }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "72%",
    color: "white",
    padding: "15px",
    backgroundColor: prize?.slogan ? "#00b849" : "#ff142b",
    boxShadow: prize?.slogan
      ? "0px 0px 10px 5px rgba(0, 255, 0, 0.5)"
      : "0px 0px 10px 5px rgba(255, 20, 43, 0.5)",
  };

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
            {prize?.slogan ? (
              <>
                {`لتعزيز ${prize.label}`}
                <br />
                {prize.slogan}
                <br />
                {prize.reward}{" "}
              </>
            ) : (
              "حظا موفقا المرة القادمة"
            )}
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
          >
            {prize?.reward && (
              <Lottie options={defaultOptionsParty} height={90} width={90} />
            )}
            <button
              className="btn btn-light fs-5 m-3"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              العودة الى الرئيسية{">"}
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
