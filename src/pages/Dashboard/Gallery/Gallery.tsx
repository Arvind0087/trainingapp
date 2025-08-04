import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";
import gallery01 from "../../../assets/images/gallery01.jpg";
import gallery02 from "../../../assets/images/gallery02.jpg";
import gallery03 from "../../../assets/images/gallery03.jpg";
import gallery04 from "../../../assets/images/gallery04.jpg";
import gallery05 from "../../../assets/images/gallery05.jpg";
import gallery06 from "../../../assets/images/gallery06.jpg";

const images = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
];

const GallerySection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openViewer = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const slides = images.map((src, i) => ({
    src,
    alt: `Gallery image ${i + 1}`,
    download: src,
  }));

  return (
    <Box sx={{ bgcolor: "#f5f0e6", py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "2.5rem", md: "4rem" },
          }}
        >
          GALLERY
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "#333",
            fontFamily: "monospace",
            mb: 6,
            fontSize: "1rem",
            letterSpacing: 1,
          }}
        >
          SHARE YOUR PHOTOS
        </Typography>

        <Grid container spacing={2}>
          {/* Featured Image */}
          <Grid size={{ xs: 12, sm: 8, md: 8 }}>
            <Box
              component="img"
              src={images[0]}
              alt="featured"
              onClick={() => openViewer(0)}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>

          {/* 2 Vertical Stacked Images */}
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Grid container spacing={2} direction="column">
              {[1, 2].map((i) => (
                <Grid key={i} size={12}>
                  <Box
                    component="img"
                    src={images[i]}
                    alt={`gallery-${i}`}
                    onClick={() => openViewer(i)}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Bottom 3 images */}
          {[3, 4, 5].map((i) => (
            <Grid key={i} size={{ xs: 12, sm: 4 }}>
              <Box
                component="img"
                src={images[i]}
                alt={`gallery-${i}`}
                onClick={() => openViewer(i)}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={slides}
          plugins={[Zoom, Fullscreen, Share, Download]}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
          toolbar={{
            buttons: [
              "close",
              "zoom-in",
              "zoom-out",
              "toggle-fullscreen",
              "download",
              "share",
            ],
          }}
        />
      </Container>
    </Box>
  );
};

export default GallerySection;
