"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack
} from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const values = [
  { title: "Compassion", icon: FavoriteIcon, desc: "We lead with empathy and walk with you, not ahead of you." },
  { title: "Integrity", icon: EmojiEventsIcon, desc: "We offer honest, confidential, and professional services." },
  { title: "Wholeness", icon: GroupIcon, desc: "True healing happens when we treat the whole person; not just the symptoms." },
  { title: "Excellence", icon: TrackChangesIcon, desc: "We strive to offer evidence-based, culturally relevant, high-quality care." },
  { title: "Faith & Hope", icon: FavoriteIcon, desc: "We honour inner strength and restore hope even in broken places." }
];

const About = () => (
  <Box component="section" sx={{ position: "relative", bgcolor: "#0A0908" }}>
    {/* Background Image */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("/images/about.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
        opacity: 0.25
      }}
    />

    {/* Dark Overlay */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(10, 9, 8, 0.85)",
        zIndex: 1
      }}
    />

    <Container sx={{ position: "relative", zIndex: 2, py: { xs: 8, md: 12 } }}>
      {/* WHO WE ARE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h4"
            component="h2"
            fontFamily="'Playfair Display', serif"
            fontWeight={700}
            color="#256EFF"
            gutterBottom
          >
            WHO WE ARE
          </Typography>

          <Box
            sx={{
              width: 120,
              height: 6,
              mx: "auto",
              mb: 6,
              borderRadius: 3,
              background: "linear-gradient(90deg, #256EFF 0%, #6C63FF 100%)"
            }}
          />

          <Typography
            variant="body1"
            color="#FCFCFC"
            maxWidth="600px"
            mx="auto"
            mb={3}
            sx={{ fontSize: "1.125rem", lineHeight: 1.8 }}
          >
            We are a multidisciplinary team of psychologists, nutritionists,
            addiction recovery specialists, trauma therapists, wellness coaches,
            and faith-led healers bound by one mission:
          </Typography>

          <Typography
            variant="h6"
            fontFamily="'Playfair Display', serif"
            color="#256EFF"
            fontWeight={600}
            mb={3}
            sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
          >
            To restore hope, health, and dignity, one person at a time.
          </Typography>

          <Typography
            variant="body1"
            color="#FCFCFC"
            maxWidth="600px"
            mx="auto"
            sx={{ fontSize: "1.125rem", lineHeight: 1.8 }}
          >
            Our work is rooted in empathy and excellence. We offer personalized,
            integrative care that addresses not only what’s hurting, but also
            what’s possible. At Eleos, healing is not just about sobriety or
            symptom relief—it’s about wholeness: mind, body, and soul.
          </Typography>
        </Box>
      </motion.div>

      {/* VISION & MISSION */}
      <Grid container spacing={6} mb={12}>
        {[
          {
            title: "OUR VISION",
            icon: TrackChangesIcon,
            text: `To be a sanctuary of healing, hope, and wholeness; where every individual is seen, heard, and nurtured back to their truest, healthiest self.`
          },
          {
            title: "OUR MISSION",
            icon: FavoriteIcon,
            text: `At Eleos Wellness Centre, we walk with people from pain to purpose, restoring mind, body, and soul through compassionate care, holistic healing, and hope-led community.`
          }
        ].map(({ title, icon: Icon, text }) => (
          <Grid item xs={12} md={6} key={title}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card sx={{ height: "100%", boxShadow: 3, borderRadius: 2, overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                    <Icon sx={{ color: "#256EFF", fontSize: 40 }} />
                    <Typography
                      variant="h5"
                      fontFamily="'Playfair Display', serif"
                      fontWeight={700}
                      color="#256EFF"
                    >
                      {title}
                    </Typography>
                  </Stack>
                  <Typography color="#0A0908" sx={{ lineHeight: 1.8 }}>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* CORE VALUES */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h4"
          fontFamily="'Playfair Display', serif"
          fontWeight={700}
          color="#256EFF"
          gutterBottom
        >
          OUR CORE VALUES
        </Typography>
        <Box
          sx={{
            width: 120,
            height: 6,
            mx: "auto",
            mb: 8,
            borderRadius: 3,
            background: "linear-gradient(90deg, #256EFF 0%, #6C63FF 100%)"
          }}
        />
      </Box>

      <Grid container spacing={6}>
        {values.map(({ title, icon: Icon, desc }, i) => (
          <Grid item xs={12} md={4} key={title}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  height: "100%",
                  boxShadow: 2,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  backgroundColor: "#1A1A1A",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Icon sx={{ fontSize: 48, color: "#6C63FF", mb: 2 }} />
                  <Typography
                    variant="h6"
                    fontFamily="'Playfair Display', serif"
                    fontWeight={700}
                    gutterBottom
                    color="#256EFF"
                  >
                    {title}
                  </Typography>
                  <Typography color="#CCCCCC">{desc}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default About;
