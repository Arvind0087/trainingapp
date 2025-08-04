import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  const navLinks = [
    ["HOME", "BIOGRAPHY", "NEWS"],
    ["FEATURES", "STORE", "CONTACTS"],
    ["VIDEO", "GALLERY", "AWARDS"],
    ["INSTAGRAM", "FACEBOOK", "TWITTER"],
  ];

  return (
    <Box sx={{ backgroundColor: "#0e0a08", color: "#999", pt: 4, pb: 6 }}>
      <Container>
        {/* Top Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 6,
            borderBottom: "1px solid #333",
            pb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#fef8ec",
            }}
          >
            Follow Instagram
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton sx={{ color: "#fff", backgroundColor: "#1e1c1a" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", backgroundColor: "#1e1c1a" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", backgroundColor: "#1e1c1a" }}>
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#fef8ec",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              RUMBLE
            </Typography>
            <Typography sx={{ color: "#e41b17", letterSpacing: "4px" }}>
              -BOXER-
            </Typography>
          </Grid>

          {navLinks.map((column, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 2 }} key={index + "khs8@"}>
              <Stack spacing={1}>
                {column.map((link, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      cursor: "pointer",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
