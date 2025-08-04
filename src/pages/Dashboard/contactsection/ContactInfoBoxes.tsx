import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

const contactItems = [
  {
    title: "Address",
    details: ["1521 Farnum Road,", "New York NY 10011"],
  },
  {
    title: "Phone",
    details: ["212-328-0493", "212-848-0448"],
  },
  {
    title: "Email",
    details: ["INFO@YOURMAIL.COM", "MAILINFO@.COM"],
  },
];

const ContactInfoBoxes: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f0e6", pt: 4, pb: 12 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {contactItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index + "d#d9"}>
              <Box
                sx={{
                  backgroundColor: "#e41b17",
                  color: "white",
                  textAlign: "center",
                  p: 4,
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#f28f8f",
                    textTransform: "uppercase",
                    mb: 2,
                    fontWeight: 600,
                    letterSpacing: "1px",
                  }}
                >
                  {item.title}
                </Typography>

                {item.details.map((detail, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "20px", sm: "15px", md: "20px" },
                      lineHeight: 1.5,
                    }}
                  >
                    {detail}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactInfoBoxes;
