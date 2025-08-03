"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
  Stack,
  Button
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Phone,
  Email,
  LocationOn,
  Favorite
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F8FAFC", // Matches navbar background
        borderTop: "1px solid #E5E7EB",
        pt: 8,
        pb: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand & Mission */}
          <Grid item xs={12} md={6} lg={4}>
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#256EFF",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                E
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#1F2937" }}>
                  ELEOS
                </Typography>
                <Typography variant="caption" sx={{ color: "#6B7280" }}>
                  Wellness & Rehabilitation Centre
                </Typography>
              </Box>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: "#6B7280", mb: 2, maxWidth: 400 }}
            >
              Where Healing Begins, and Hope is Restored. A sanctuary of refuge and
              restoration in the heart of Gatitu, Thika.
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#256EFF", fontWeight: "bold", mb: 3 }}
            >
              🌍 Where healing begins, and hope is restored.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={2}>
              <IconButton sx={{ border: "1px solid #E5E7EB" }}>
                <Facebook sx={{ color: "#256EFF" }} />
              </IconButton>
              <IconButton sx={{ border: "1px solid #E5E7EB" }}>
                <Instagram sx={{ color: "#256EFF" }} />
              </IconButton>
              <IconButton sx={{ border: "1px solid #E5E7EB" }}>
                <LinkedIn sx={{ color: "#256EFF" }} />
              </IconButton>
              <IconButton sx={{ border: "1px solid #E5E7EB" }}>
                <Twitter sx={{ color: "#256EFF" }} />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography
              variant="h6"
              sx={{ color: "#1F2937", mb: 2, fontWeight: "600" }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {["Home", "About Us", "Our Services", "Our Story", "Partner With Us"].map(
                (link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    sx={{
                      color: "#6B7280",
                      textDecoration: "none",
                      "&:hover": { color: "#256EFF" }
                    }}
                  >
                    {link}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography
              variant="h6"
              sx={{ color: "#1F2937", mb: 2, fontWeight: "600" }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <LocationOn sx={{ color: "#256EFF" }} />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  Gatitu, Thika <br /> Less than 1km from Thika town centre
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Phone sx={{ color: "#256EFF" }} />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  +254722520122
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email sx={{ color: "#256EFF" }} />
                <Typography variant="body2" sx={{ color: "#6B7280" }}>
                  eleoswellnesscentre@gmail.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Services Overview */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h6"
            sx={{ color: "#1F2937", mb: 2, fontWeight: "600" }}
          >
            Our Services
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              "Mental Health & Counselling",
              "Medical & Functional Wellness",
              "Child & Adolescent Care",
              "Holistic Therapies",
              "Corporate Wellness",
              "Community Programs"
            ].map((service) => (
              <Grid item xs={6} sm={4} md={2} key={service}>
                <Typography
                  variant="body2"
                  sx={{ color: "#6B7280", textAlign: "center" }}
                >
                  {service}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ color: "#6B7280", fontSize: "0.875rem" }}
        >
          <Typography>
            © 2024 Eleos Wellness & Rehabilitation Centre. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Made with</Typography>
            <Favorite sx={{ color: "red", fontSize: "16px" }} />
            <Typography>for healing and hope</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
