import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

import strengthImg from "../../../assets/images/training01.jpg";
import weightImg from "../../../assets/images/training02.jpg";
import youthImg from "../../../assets/images/training03.jpg";
import personalImg from "../../../assets/images/training04.jpg";

const galleryItems = [
  { title: "STRENGTH AND CONDITIONING", image: strengthImg },
  { title: "WEIGHT TRAINING", image: weightImg },
  { title: "YOUTH BOXING", image: youthImg },
  { title: "PERSONAL TRAINING", image: personalImg },
];

const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "500px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  padding: theme.spacing(2),
  color: "#fff",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
    zIndex: 1,
  },
}));

const TextOverlay = styled(Typography)(() => ({
  position: "relative",
  zIndex: 2,
  fontSize:"2.8rem",
  fontWeight: 600,
  letterSpacing: "1px",
  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  fontFamily: "Rajdhani, Sans-serif"
}));

const TrainingGallery: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={0}>
        {galleryItems.map((item, index) => (
          <Grid 
            size={{ xs: 12, sm: 6, md: 3 }}
            key={`gallery-${index}`}
          >
            <ImageBox style={{ backgroundImage: `url(${item.image})` }}>
              <TextOverlay>{item.title}</TextOverlay>
            </ImageBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrainingGallery;