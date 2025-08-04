import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import bannerImg from "../../../assets/images/banner.jpg";

interface BannerProps {
  backgroundImage?: string;
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const BannerContainer = styled(Box)<{ backgroundImage?: string }>(
  ({ theme, backgroundImage }) => ({
    minHeight: "130vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    overflow: "hidden",
    [theme.breakpoints.only("xs")]: {
      minHeight: "60vh",
    },
    [theme.breakpoints.only("sm")]: {
      minHeight: "60vh",
    },
    [theme.breakpoints.only("md")]: {
      minHeight: "120vh",
    },
  })
);

const ContentBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  zIndex: 2,
  maxWidth: "100%",
  marginTop:"10vh",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Rajdhani, sans-serif",
  fontWeight: "700",
  fontSize: "5.5rem",
  lineHeight: 1.1,
  marginBottom: theme.spacing(5),
  textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)",
  letterSpacing: "3px",
  textTransform: "uppercase",
  textAlign: "center",
  color: "#F1EDE1",
  maxWidth: "100%",
  [theme.breakpoints.only("xs")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "3.5rem",
    marginBottom: theme.spacing(3),
    letterSpacing: "1px",
    lineHeight: 1.2,
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#d32f2f",
  color: "#ffffff",
  padding: "18px 40px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  borderRadius: "4px",
  boxShadow: "0 4px 15px rgba(211, 47, 47, 0.4)",
  minWidth: "280px",
  "&:hover": {
    backgroundColor: "#b71c1c",
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(211, 47, 47, 0.6)",
  },
  transition: "all 0.3s ease",
  [theme.breakpoints.down("sm")]: {
    padding: "14px 28px",
    fontSize: "0.9rem",
    minWidth: "200px",
    letterSpacing: "1px",
  },
}));

const Banner: React.FC<BannerProps> = ({
  backgroundImage = bannerImg,
  title = "JOIN THE TEAM OF WINNERS",
  buttonText = "BOXING ACHIEVEMENTS",
  onButtonClick,
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      console.log("Button clicked");
    }
  };

  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 3 }, // Responsive padding
        }}
      >
        <ContentBox>
          <MainTitle variant="h1">{title}</MainTitle>
          <ActionButton
            variant="contained"
            size="large"
            onClick={handleButtonClick}
          >
            {buttonText}
          </ActionButton>
        </ContentBox>
      </Container>
    </BannerContainer>
  );
};

export default Banner;
