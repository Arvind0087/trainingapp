import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)(({}) => ({
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
}));

const Logo = styled(Typography)(({}) => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  letterSpacing: "2px",
  color: "#ffffff",
  flexGrow: 1,
}));

const SocialIconButton = styled(IconButton)(({}) => ({
  color: "#ffffff",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  margin: "0 4px",
  width: 40,
  height: 40,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "translateY(-2px)",
  },
  transition: "all 0.3s ease",
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Logo variant="h6">RUMBLE</Logo>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIconButton>
                <InstagramIcon fontSize="small" />
              </SocialIconButton>
            </Link>

            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIconButton>
                <FacebookIcon fontSize="small" />
              </SocialIconButton>
            </Link>

            <Link to="https://x.com" target="_blank" rel="noopener noreferrer">
              <SocialIconButton>
                <XIcon fontSize="small" />
              </SocialIconButton>
            </Link>

            <Link
              to="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIconButton>
                <YouTubeIcon fontSize="small" />
              </SocialIconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
