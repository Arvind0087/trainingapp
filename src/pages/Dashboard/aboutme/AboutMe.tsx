import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import boxingImage from "../../../assets/images/aboutme.jpg";

const Root = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#f5f1e5",
  justifyContent: "center",
}));

const InnerContent = styled(Box)(({ theme }) => ({
  width: "95%",
  display: "flex",
  padding: theme.spacing(12, 2, 12, 2),
  [theme.breakpoints.only("xs")]: {
    flexDirection: "column",
    padding: theme.spacing(8, 2, 4, 2),
  },
  [theme.breakpoints.only("sm")]: {
    flexDirection: "column",
    padding: theme.spacing(10, 2, 6, 2),
  },
}));

const ImageSection = styled(Box)(({}) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const BoxingHero: React.FC = () => {
  return (
    <Root>
      <InnerContent>
        <ImageSection>
          <img src={boxingImage} alt="Boxing" />
        </ImageSection>
        <ContentSection>
          <Typography
            variant="h5"
            sx={{ fontFamily: "cursive", color: "#c60000", mb: 2 }}
          >
            The Gym
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2em", sm: "3em", md: "4.5rem" },
              lineHeight: 1,
              fontFamily: "Rajdhani, Sans-serif",
            }}
          >
            PROFESSIONAL
            <br />
            BOXING STUDIO
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "monospace", mb: 4, color: "#5B5853" }}
          >
            Lorem ipsum dolor sit amet, consetetur et sadipscing elitr, sed diam
            nonumy et mod tempor invidunt ut labore et dolore aliquyam erat, sed
            diam voluptua. At vero eos et accusam et justo dolores ea rebum.
            Stet clita kasd gubergren, no sea.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              width: { xs: "100%", sm: "160px" },
              padding: "20px 10px 20px 10px",
            }}
          >
            READ MORE
          </Button>
        </ContentSection>
      </InnerContent>
    </Root>
  );
};

export default BoxingHero;
