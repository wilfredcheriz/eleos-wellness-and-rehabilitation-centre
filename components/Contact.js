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
  Stack
} from "@mui/material";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0D47A1 0%, #256EFF 100%)",
          color: "#fff",
          py: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          maxWidth="600px"
          mx="auto"
          color="rgba(255,255,255,0.85)"
        >
          Ready to begin your journey to wholeness? We're here to walk with you
          every step of the way.
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box flex="1" py={10} px={{ xs: 2, md: 8 }} bgcolor="#F9FAFB">
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardHeader
                title="Send us a Message"
                subheader="Fill out the form and we'll get back to you soon."
              />
              <Divider />
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
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
                        size="large"
                        fullWidth
                        sx={{
                          bgcolor: "#256EFF",
                          "&:hover": { bgcolor: "#1C4ED8" },
                        }}
                        startIcon={<Send size={18} />}
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
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardHeader
                title="Get in Touch"
                subheader="We're here to answer your questions and support your healing journey."
              />
              <Divider />
              <CardContent>
                <Stack spacing={3}>
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <MapPin color="#256EFF" />
                    <Box>
                      <Typography fontWeight="bold">Location</Typography>
                      <Typography color="text.secondary">
                        Gatitu, Thika<br />
                        Less than 1km from town centre
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <Phone color="#256EFF" />
                    <Box>
                      <Typography fontWeight="bold">Phone</Typography>
                      <Typography color="text.secondary">
                        +254 722 520 122
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <Mail color="#256EFF" />
                    <Box>
                      <Typography fontWeight="bold">Email</Typography>
                      <Typography color="text.secondary">
                        eleoswellnesscentre@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="flex-start" gap={2}>
                    <Clock color="#256EFF" />
                    <Box>
                      <Typography fontWeight="bold">Opening Hours</Typography>
                      <Typography color="text.secondary">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 4:00 PM<br />
                        Sun: Emergency Only
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card
              sx={{
                border: "1px solid #ef5350",
                backgroundColor: "#ffebee",
                borderRadius: 3,
              }}
            >
              <CardHeader
                title="Crisis Support"
                titleTypographyProps={{ color: "error", fontWeight: "bold" }}
              />
              <CardContent>
                <Typography color="text.secondary" mb={1}>
                  Experiencing a crisis or emergency?
                </Typography>
                <Typography fontWeight="bold" color="error.main">
                  24/7 Crisis Line: +254 722 520 122
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  For immediate help, visit your nearest hospital emergency room.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
