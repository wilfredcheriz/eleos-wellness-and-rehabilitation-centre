"use client";
import Link from "next/link";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack
} from "@mui/material";
import {
  Favorite,
  Groups,
  Lightbulb,
  Business,
  Diversity3,
  EmojiObjects,
  ArrowForward,
  Mail,
  Phone,
  LocationOn
} from "@mui/icons-material";
import { motion } from "framer-motion";

const impacts = [
  {
    icon: Favorite,
    title: "Subsidized Care",
    description: "Offer subsidized or free care for clients in crisis"
    
  },
  {
    icon: Groups,
    title: "Community Outreach",
    description: "Expand outreach and reintegration programs for youth and recovering addicts"
  },
  {
    icon: Lightbulb,
    title: "Training Programs",
    description: "Train community wellness champions and school-based counselors"
  },
  {
    icon: Diversity3,
    title: "Healing Events",
    description: "Host restorative retreats and community healing events"
  },
  {
    icon: Business,
    title: "Recovery Community",
    description: "Build Kenya's first trauma-informed, gender-sensitive, spiritually grounded recovery community"
  },
  {
    icon: EmojiObjects,
    title: "Corporate Wellness",
    description: "Equip corporates with tools to build mentally healthy, emotionally intelligent teams"
  }
];

const PartnerSection = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#1F2937", mb: 2 }}>
            WHY PARTNER WITH US
          </Typography>
          <Box
            sx={{
              width: 96,
              height: 4,
              bgcolor: "#256EFF",
              mx: "auto",
              borderRadius: 2,
              mb: 3
            }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#256EFF", fontWeight: "600", fontSize: "1.125rem" }}
          >
            Restoring lives. Rebuilding futures. Reclaiming dignity — Together.
          </Typography>
        </Box>

        {/* Problem Statement */}
        <Box maxWidth="900px" mx="auto" mb={10}>
          <Card sx={{ borderRadius: 3, backgroundColor: "#FFFFFF", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4} sx={{ color: "#1F2937" }}>
                The Challenge We're Addressing
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography mb={2} sx={{ color: "#374151" }}>
                    In Kenya and across East Africa, holistic mental health and
                    addiction recovery services remain inaccessible for far too
                    many:
                  </Typography>
                  <ul style={{ paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
                    <li>Women navigating menopause are misdiagnosed</li>
                    <li>Teen boys battling trauma are criminalized</li>
                    <li>Men suffering silently in addiction are shamed</li>
                  </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ul style={{ paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
                    <li>Professionals crumble from corporate burnout</li>
                    <li>Families disintegrate from emotional neglect</li>
                    <li>Untreated mental health issues persist</li>
                  </ul>
                  <Typography mt={3} sx={{ fontWeight: 600, color: "#256EFF" }}>
                    Eleos is here to change that. And we've already begun.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

     {/* Our Approach */}
<Box mb={10} sx={{ bgcolor: "#256EFF", py: 8, px: { xs: 2, md: 6 }, borderRadius: 3 }}>
  <Typography variant="h5" fontWeight="bold" textAlign="center" mb={6} sx={{ color: "#FFFFFF" }}>
    Our Comprehensive Approach
  </Typography>

  {/* Approach items with images */}
  <Grid container spacing={4} justifyContent="center">
    {[
      {
        label: "Mental Health Therapy",
        image: "/images/mental1.png"
      },
      {
        label: "Addiction Recovery",
        image: "/images/addiction1.png"
      },
      {
        label: "Functional Wellness",
        image: "/images/functional.png"
      },
      {
        label: "Spiritual Direction",
        image: "/images/spiritual.png"
      }
    ].map((item, index) => (
      <Grid key={index} item xs={12} sm={6} md={3}>
        <Card
          sx={{
            textAlign: "center",
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.08)",
            color: "#FFFFFF",
            p: 0,
            height: "100%",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
            }
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt={item.label}
            sx={{
              width: "100%",
              height: 160,
              objectFit: "cover"
            }}
          />
          <CardContent>
            <Typography fontWeight="600" sx={{ color: "#FFFFFF" }}>
              {item.label}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>


        {/* Partnership Impact (with animation) */}
        <Box mb={10}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={6} sx={{ color: "#1F2937" }}>
            Your Partnership Enables Us To:
          </Typography>
          <Grid container spacing={4}>
            {impacts.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Card
                      sx={{
                        borderRadius: 3,
                        bgcolor: "#FFFFFF",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        height: "100%"
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <IconComponent sx={{ fontSize: 40, color: "#256EFF", mb: 2 }} />
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 1, color: "#1F2937" }}>
                          {impact.title}
                        </Typography>
                        <Typography sx={{ color: "#6B7280" }}>{impact.description}</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Card
          sx={{
            bgcolor: "#F0F7FF",
            borderRadius: 3,
            p: { xs: 4, md: 6 },
            textAlign: "center"
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: "#1F2937" }}>
            📩 JOIN THE MOVEMENT
          </Typography>
          <Typography sx={{ maxWidth: 700, mx: "auto", mb: 3, fontSize: "1.125rem", color: "#1F2937" }}>
            Whether you're a donor, grant-maker, foundation, social investor,
            or forward-thinking organization; we invite you to partner with
            purpose.
          </Typography>
          <Typography sx={{ color: "#6B7280", mb: 4 }}>
            Come walk with us as we turn pain into purpose, addiction into
            recovery, grief into growth, and burnout into rebirth.
          </Typography>

          {/* Contact Info */}
          <Grid container spacing={3} justifyContent="center" mb={4}>
            <Grid item xs={12} md={4}>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <LocationOn sx={{ color: "#256EFF" }} />
                <Typography fontSize="0.9rem" sx={{ color: "#1F2937" }}>
                  Gatitu, Thika - less than 1km from town centre
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Mail sx={{ color: "#256EFF" }} />
                <Typography fontSize="0.9rem" sx={{ color: "#1F2937" }}>
                  eleoswellnesscentre@gmail.com
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Phone sx={{ color: "#256EFF" }} />
                <Typography fontSize="0.9rem" sx={{ color: "#1F2937" }}>
                  +254722520122
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          {/* Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Link href="/partner-form" passHref>
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: "#256EFF", color: "#fff", "&:hover": { bgcolor: "#1D4ED8" } }}
                endIcon={<ArrowForward />}
              >
                Partner With Us
              </Button>
            </Link>
            <Button variant="outlined" size="large" sx={{ borderColor: "#256EFF", color: "#256EFF" }}>
              Learn More
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};

export default PartnerSection;
