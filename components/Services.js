"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
  Stack
} from "@mui/material";
import {
  Psychology,
  Favorite,
  Group,
  Spa,
  Business,
  ChildCare,
  Chat,
  MonitorHeart
} from "@mui/icons-material";

const services = [
  {
    icon: <Psychology sx={{ color: "#256EFF", fontSize: 32 }} />,
    title: "Mental Health & Counselling",
    image: "/images/mentalhealth.png",
    items: [
      "Addiction recovery & relapse prevention counseling",
      "Individual therapy for adults, teens, and children",
      "Trauma-informed care",
      "Marriage & family therapy",
      "Group therapy & support groups",
      "Grief and loss support",
      "Psychological assessments"
    ]
  },
  {
    icon: <MonitorHeart sx={{ color: "#256EFF", fontSize: 32 }} />,
    title: "Medical & Functional Wellness",
    image: "/images/wellness.png",
    items: [
      "Nutrition consultation & personalized meal planning",
      "Men's and women's hormonal health support",
      "Chronic illness support (autoimmune, diabetes, hypertension)",
      "Bioresonance & neurotherapy (coming soon)",
      "IV therapy & detox programs (coming soon)"
    ]
  },
  {
    icon: <ChildCare sx={{ color: "#256EFF", fontSize: 32 }} />,
    title: "Child & Adolescent Wellness",
    image: "/images/childtherapy.png",
    items: [
      "Play therapy & art therapy",
      "Autism & neurodiversity support",
      "School-based mental health programs",
      "Teen mentorship & emotional regulation",
      "Parenting coaching and family wellness"
    ]
  },
  {
    icon: <Spa sx={{ color: "#256EFF", fontSize: 32 }} />,
    title: "Holistic Therapies & Lifestyle Medicine",
    image: "/images/holistic.png",
    items: [
      "Mindfulness & stress management",
      "Guided meditation & breathwork",
      "Fitness coaching (with weight loss support)",
      "Emotional wellness retreats & self-care weekends",
      "Spiritual direction & inner healing sessions"
    ]
  },
  {
    icon: <Business sx={{ color: "#256EFF", fontSize: 32 }} />,
    title: "Corporate Wellness Programs",
    image: "/images/corporate.png",
    items: [
      "Mental health and stress management workshops",
      "Burnout prevention and resilience building for teams",
      "Employee Assistance Programs (EAPs)",
      "Leadership coaching and emotional intelligence development",
      "Workplace wellness strategy consultation"
    ]
  },
  {
    icon: <Group sx={{ color: "#256EFF", fontSize: 32 }} />,
    title: "Community Programs",
    image: "/images/community.png",
    items: [
      "Support groups for women, caregivers, and trauma survivors",
      "Mental health workshops and training",
      "School & workplace wellness programs",
      "Outreach for underserved communities",
      "Eleos Mama Circle: A safe space for mothers",
      "Pre-Menopause & Menopause Circle",
      "Youth Empowerment Bootcamps",
      "Men's Emotional Health Roundtables",
      "Wellness Retreats in Nature"
    ]
  }
];

const ServicesSection = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F9FAFB" }}>
      <Container>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#0A0908" }} gutterBottom>
            WHAT WE OFFER
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 4,
              bgcolor: "#256EFF",
              mx: "auto",
              mb: 3,
              borderRadius: 2
            }}
          />
          <Typography
            variant="body1"
            color="#6B7280"
            maxWidth="800px"
            mx="auto"
            sx={{ fontSize: "1.125rem", lineHeight: 1.8 }}
          >
            Eleos Wellness & Rehabilitation Centre provides a comprehensive and integrative approach
            to healing and transformation, including:
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={6} mb={8} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover"
                  }}
                />

                <CardHeader
                  sx={{ textAlign: "center", pb: 0 }}
                  title={
                    <Stack direction="column" alignItems="center" spacing={2} mt={2}>
                      <Box sx={{ p: 1.5, bgcolor: "#E8F0FE", borderRadius: 2 }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h6" fontWeight="bold" sx={{ color: "#0A0908" }}>
                        {service.title}
                      </Typography>
                    </Stack>
                  }
                />

                <CardContent sx={{ pt: 2 }}>
                  <Divider sx={{ mb: 2 }} />
                  <Stack spacing={1}>
                    {service.items.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: "#256EFF",
                            minWidth: "20px"
                          }}
                        >
                          {idx + 1}.
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#6B7280" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box textAlign="center" mt={6}>
          <Card sx={{ bgcolor: "#E8F0FE", borderRadius: 2, p: { xs: 4, md: 6 } }}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#0A0908" }}>
              Ready to Begin Your Healing Journey?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6B7280",
                mb: 4,
                maxWidth: 600,
                mx: "auto",
                fontSize: "1rem",
                lineHeight: 1.8
              }}
            >
              Whether you're navigating addiction, trauma, grief, hormonal imbalance, burnout, mental illness,
              or emotional exhaustion, Eleos is where your journey back to wholeness begins.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                component="a"
                href="https://calendly.com/wilfredwere/30min"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                sx={{ bgcolor: "#256EFF", "&:hover": { bgcolor: "#1E4FD9" } }}
                startIcon={<Chat />}
              >
                Book a Consultation
              </Button>

              <Link href="/programs" passHref>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#256EFF",
                    borderColor: "#256EFF",
                    "&:hover": { borderColor: "#1E4FD9", color: "#1E4FD9" }
                  }}
                  startIcon={<Favorite />}
                >
                  Explore Programs
                </Button>
              </Link>
            </Stack>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
