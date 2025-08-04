import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f0e6", py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid size={{ xs: 12, sm: 6 }}>
            <ContactInfo />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
