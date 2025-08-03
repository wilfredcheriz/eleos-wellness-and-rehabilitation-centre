"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Grid
} from "@mui/material";
import { Favorite, Home, Groups, AutoAwesome } from "@mui/icons-material";

const StorySection = () => {
  const router = useRouter();

  const handleJoinClick = () => {
    router.push("/partner-form");
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #0A0908 0%, #256EFF 100%)",
        color: "#FCFCFC"
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#FCFCFC", mb: 1 }}
          >
            OUR STORY
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              bgcolor: "#FCFCFC",
              mx: "auto",
              borderRadius: 2,
              mb: 3
            }}
          />
        </Box>

        <Box maxWidth="900px" mx="auto">
          {/* Main Story Card */}
          <Card sx={{ mb: 6, borderRadius: 3, boxShadow: 3, bgcolor: "#FFFFFF" }}>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Box textAlign="center" mb={4}>
                <Favorite sx={{ fontSize: 60, color: "#256EFF", mb: 2 }} />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#0A0908" }}
                >
                  Born from a Quiet Ache
                </Typography>
              </Box>

              <Stack spacing={3} sx={{ color: "#333", lineHeight: 1.8 }}>
                <Typography>
                  Eleos was born from a quiet ache; a longing to bridge the gap
                  between suffering and support...
                </Typography>

                <Typography>
                  We saw mothers break in private, teens spiral without a
                  lifeline...
                </Typography>

                <Typography>
                  So we came together; a small circle of passionate therapists...
                </Typography>

                <Box
                  sx={{
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#256EFF",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    borderLeft: "4px solid #256EFF",
                    py: 2,
                    px: 3,
                    my: 4
                  }}
                >
                  "Eleos, drawn from the Greek word for compassion, is more than
                  a wellness centre. It is a movement."
                </Box>

                <Typography>
                  Here, science meets soul. Therapy meets tenderness...
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Grid container spacing={4} mb={6}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: "100%", boxShadow: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                    <Home sx={{ fontSize: 32, color: "#256EFF" }} />
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#0A0908" }}
                    >
                      Residential Facility
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#6B7280" }}>
                    A fully operational rehabilitation facility...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, height: "100%", boxShadow: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                    <Groups sx={{ fontSize: 32, color: "#256EFF" }} />
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#0A0908" }}
                    >
                      Community Impact
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#6B7280" }}>
                    Located less than 1km from Thika town centre...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Movement Declaration */}
          <Card
            sx={{
              bgcolor: "#E8F0FE",
              border: "1px solid #256EFF33",
              borderRadius: 3,
              textAlign: "center",
              p: { xs: 4, md: 6 }
            }}
          >
            <AutoAwesome sx={{ fontSize: 50, color: "#256EFF", mb: 3 }} />
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#0A0908", mb: 3 }}
            >
              Eleos is a Movement
            </Typography>

            <Typography
              sx={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "#333",
                mb: 4
              }}
            >
              A loud whisper that says:
            </Typography>

            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              {[
                '"You matter."',
                '"You are seen."',
                '"Healing is possible."',
                '"You don’t have to do it alone."'
              ].map((quote, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                      boxShadow: 1
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#256EFF",
                        fontSize: "1rem"
                      }}
                    >
                      {quote}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Button
              onClick={handleJoinClick}
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#256EFF",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": { bgcolor: "#1E4FD9" }
              }}
            >
              Join Our Movement
            </Button>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default StorySection;
