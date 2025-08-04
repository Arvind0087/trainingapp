import { styled } from "@mui/material/styles";
import ProgressBar from "../progress-bar/ProgressBar";

const StyledRoot = styled("div")(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

const LoadingScreen: React.FC = () => {
  return (
    <>
      <ProgressBar />
      <StyledRoot>
        <p>Loading...</p>
      </StyledRoot>
    </>
  );
};

export default LoadingScreen;
