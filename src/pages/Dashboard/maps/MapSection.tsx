import React from "react";
import { Box } from "@mui/material";

const MapSection: React.FC = () => {
  return (
    <Box sx={{ pb: 12, pt: 2, background: "#f5f0e6" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.858552311368!2d77.32853097449036!3d28.543970988098653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce42ac207209d%3A0x94dbc78a3c29065e!2sTradex%20Tower%20Noida%20sector%20125!5e0!3m2!1sen!2sin!4v1754244089630!5m2!1sen!2sin"
        width="100%"
        height="450px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapSection;
