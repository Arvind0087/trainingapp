import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

const ContactForm: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Name"
          variant="filled"
          sx={{ backgroundColor: "#ede9dd" }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          sx={{ backgroundColor: "#ede9dd" }}
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={6}
          variant="filled"
          sx={{ backgroundColor: "#ede9dd" }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#13100f",
            color: "white",
            fontWeight: "bold",
            letterSpacing: "1px",
            width: "150px",
            "&:hover": { backgroundColor: "#333" },
          }}
        >
          SUBMIT
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;
