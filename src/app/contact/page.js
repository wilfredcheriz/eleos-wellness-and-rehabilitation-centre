"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from "@mui/material";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#FCFCFC">
    {/* Hero Section */}
<Box
  sx={{
    background: `linear-gradient(to right,rgb(3, 8, 34) 50%,rgb(3, 14, 36) 50%)`,
    color: "#FCFCFC",
    py: { xs: 8, md: 12 },
    px: 2,
  }}
>
  <Grid container alignItems="center" justifyContent="center">
    <Grid item xs={12} md={10}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Left (Black background) */}
        <Box
          sx={{
            flex: 1,
            color: "#FCFCFC",
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: "#FCFCFC", mb: 2 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.85)",
              maxWidth: 500,
              lineHeight: 1.7,
            }}
          >
            Ready to begin your journey to wholeness? We’re here to walk with
            you every step of the way. Let’s start the conversation.
          </Typography>
        </Box>

        {/* Right (Blue background) */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FCFCFC",
              padding: 3,
              borderRadius: 2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              textAlign: "center",
              maxWidth: 360,
              width: "100%",
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: "#0A0908", mb: 1 }}
            >
              📍 Office Location
            </Typography>
            <Typography sx={{ color: "#374151" }}>
              Gatitu, Thika — Less than 1km from the town centre
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: "#0A0908", mb: 1 }}
            >
              📞 Phone
            </Typography>
            <Typography sx={{ color: "#374151" }}>+254722520122</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
</Box>

      {/* Contact Section */}
      <Box flex="1" py={8} px={{ xs: 2, md: 8 }} bgcolor="#FCFCFC">
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, bgcolor: "#fff", boxShadow: 3 }}>
              <CardHeader
                title="Send us a Message"
                subheader="Fill out the form below and we'll get back to you within 24 hours."
                sx={{ color: "#0A0908" }}
              />
              <Divider />
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="First Name" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Last Name" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        label="Email Address"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Phone Number" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        select
                        label="Service of Interest"
                        SelectProps={{ native: true }}
                        fullWidth
                      >
                        <option value="">Select a service</option>
                        <option value="addiction-recovery">Addiction Recovery</option>
                        <option value="mental-health">Mental Health Counseling</option>
                        <option value="family-therapy">Family Therapy</option>
                        <option value="trauma-care">Trauma-Informed Care</option>
                        <option value="corporate-wellness">Corporate Wellness</option>
                        <option value="nutrition">Nutrition Consultation</option>
                        <option value="other">Other</option>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={<Send size={18} />}
                        sx={{
                          backgroundColor: "#256EFF",
                          color: "#FCFCFC",
                          "&:hover": {
                            backgroundColor: "#1E4ED8",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6} display="flex" flexDirection="column" gap={3}>
            {/* Contact Details */}
            <Card sx={{ borderRadius: 3, bgcolor: "#fff", boxShadow: 3 }}>
              <CardHeader
                title="Get in Touch"
                subheader="We're here to answer your questions and support you on your healing journey."
                sx={{ color: "#0A0908" }}
              />
              <Divider />
              <CardContent>
                <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
                  <MapPin color="#256EFF" />
                  <Box>
                    <Typography fontWeight="bold" color="#0A0908">Location</Typography>
                    <Typography color="text.secondary">
                      Gatitu, Thika <br />
                      Under 1km from Thika town centre
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
                  <Phone color="#256EFF" />
                  <Box>
                    <Typography fontWeight="bold" color="#0A0908">Phone</Typography>
                    <Typography color="text.secondary">+254722520122</Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="flex-start" gap={2} mb={2}>
                  <Mail color="#256EFF" />
                  <Box>
                    <Typography fontWeight="bold" color="#0A0908">Email</Typography>
                    <Typography color="text.secondary">eleoswellnesscentre@gmail.com</Typography>
                  </Box>
                </Box>

                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Clock color="#256EFF" />
                  <Box>
                    <Typography fontWeight="bold" color="#0A0908">Hours</Typography>
                    <Typography color="text.secondary">
                      Mon - Fri: 8:00 AM - 6:00 PM <br />
                      Sat: 9:00 AM - 4:00 PM <br />
                      Sun: Emergency only
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Crisis Support */}
            <Card
              sx={{
                border: "2px solid #256EFF",
                backgroundColor: "#F0F7FF",
                borderRadius: 3,
              }}
            >
              <CardHeader
                title="Crisis Support"
                titleTypographyProps={{
                  fontWeight: "bold",
                  sx: { color: "#256EFF" },
                }}
              />
              <CardContent>
                <Typography mb={1} color="#0A0908">
                  If you're experiencing a mental health crisis or emergency,
                  please reach out immediately:
                </Typography>
                <Typography fontWeight="bold" color="#0A0908">
                  24/7 Crisis Line: +254722520122
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  For immediate assistance, visit your nearest hospital
                  emergency room.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
