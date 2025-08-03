"use client";

import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import { ArrowForward, Favorite, Shield, Group } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url('/images/her.png')`,
        backgroundSize: "600% auto", // Wider for smoother sliding
        backgroundPosition: "100% center",
        backgroundRepeat: "repeat-x",
        color: "#FCFCFC",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        py: { xs: 8, md: 12 },
        animation: "slideBackground 60s linear infinite",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(10, 9, 8, 0.6)",
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Animated Name */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            animation: "colorChange 12s ease-in-out infinite",
          }}
        >
          ELEOS WELLNESS & REHABILITATION CENTRE
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 1,
            color: "#256EFF",
            fontWeight: "600",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          Welcome to Eleos
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontStyle: "italic",
            maxWidth: 700,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Where Healing Begins, and Hope is Restored.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            mx: "auto",
            mb: 6,
            lineHeight: 1.7,
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          Nestled in the serene heart of Gatitu, Thika, just under 1 kilometre from
          Thika town centre; Eleos Wellness & Rehabilitation Centre stands as a
          sanctuary of refuge and restoration. Built not only with walls, but with
          unwavering compassion, lived experience, and clinical excellence.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 8, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#256EFF",
              color: "#FCFCFC",
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.9rem", md: "1rem" },
              "&:hover": { bgcolor: "#1D4ED8" },
            }}
            endIcon={<ArrowForward />}
          >
            Start Your Journey
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#FCFCFC",
              borderColor: "#FCFCFC",
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.9rem", md: "1rem" },
              "&:hover": {
                bgcolor: "rgba(252,252,252,0.1)",
                borderColor: "#FCFCFC",
              },
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Feature Cards */}
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              icon: <Favorite sx={{ fontSize: 40, color: "#256EFF" }} />,
              title: "Compassionate Care",
              desc: "Leading with empathy and walking with you on your healing journey",
            },
            {
              icon: <Shield sx={{ fontSize: 40, color: "#256EFF" }} />,
              title: "Safe Space",
              desc: "A sanctuary where brokenness is held and pain is transformed",
            },
            {
              icon: <Group sx={{ fontSize: 40, color: "#256EFF" }} />,
              title: "Holistic Approach",
              desc: "Treating the whole person: mind, body, and soul",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  bgcolor: "rgba(252,252,252,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "#FCFCFC",
                  textAlign: "center",
                  p: 3,
                }}
              >
                <CardContent>
                  {item.icon}
                  <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Animations */}
      <style jsx global>{`
        @keyframes colorChange {
          0% {
            color: #ffffff;
          }
          33% {
            color: #256EFF;
          }
          66% {
            color: #000000;
          }
          100% {
            color: #ffffff;
          }
        }

        @keyframes slideBackground {
          0% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </Box>
  );
}
