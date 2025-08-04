import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 21, label: "Fights Won" },
  { value: 218, label: "Rounds Boxed" },
  { value: 14, label: "Knock Outs" },
];

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: "#e01010",
        py: { xs: 6, sm: 10, md: 14 },
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {stats?.map((stat, index) => (
          <Grid key={index} size={{ xs: 10, sm: 3.5, md: 3.5 }}>
            <Box
              sx={{
                bgcolor: "#c71010",
                px: { xs: 2, sm: 1, md: 5 },
                py: { xs: 5, sm: 10, md: 10 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Rajdhani, Sans-serif",
                  color: "#fff",
                  mb: 1,
                  fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
                }}
              >
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  fontFamily: '"Handlee", cursive',
                  fontSize: "1.3rem",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
