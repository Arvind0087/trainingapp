import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const AboutUsSection: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f5f0e6",
        py: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h6"
          sx={{
            color: "#b41111",
            fontFamily: "cursive",
            mb: 2,
          }}
        >
          About Us
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "Rajdhani, Sans-serif",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            mb: 3,
          }}
        >
          OUR TRAINERS ARE WORLD CHAMPIONS
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "monospace",
            color: "#666",
            mb: 5,
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
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
      </Container>
    </Box>
  );
};

export default AboutUsSection;
