"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const interests = [
  "Mental Health Therapy",
  "Addiction Recovery",
  "Corporate Wellness",
  "School-Based Counseling",
  "Community Healing Events"
];

const intentOptions = [
  "Financial Donor",
  "Grant-Maker / Funder",
  "Volunteer Organization",
  "CSR Partner",
  "Mental Health Advocate",
  "Other"
];

const inputStyle = {
  input: { color: "#000" },
  textarea: { color: "#000" }
};

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    orgName: "",
    email: "",
    phone: "",
    website: "",
    intent: "",
    supportType: "",
    interestAreas: [],
    newsletter: false,
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interestAreas: prev.interestAreas.includes(interest)
        ? prev.interestAreas.filter(i => i !== interest)
        : [...prev.interestAreas, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add submission logic here
  };

  return (
    <Box sx={{ backgroundColor: "#F4F6F8", minHeight: "100vh", py: 6, px: 2 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Card elevation={8} sx={{ borderRadius: 3, px: { xs: 2, md: 4 }, py: 4 }}>
            <CardContent>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  background: "linear-gradient(90deg, #256EFF, #2ec4b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                  textAlign: "center",
                  mb: 3,
                  fontSize: { xs: "2rem", md: "3rem" },
                  letterSpacing: 1.5,
                  textTransform: "uppercase"
                }}
              >
                🤝 Partner With Eleos
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ color: "#333", textAlign: "center", maxWidth: 600, mx: "auto" }}
              >
                Join us in creating meaningful impact through mental health initiatives.
                Tell us about your partnership interests and let's build something together.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name *"
                      name="name"
                      fullWidth
                      required
                      value={formData.name}
                      onChange={handleChange}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Organization"
                      name="orgName"
                      fullWidth
                      value={formData.orgName}
                      onChange={handleChange}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email *"
                      name="email"
                      type="email"
                      fullWidth
                      required
                      value={formData.email}
                      onChange={handleChange}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone"
                      name="phone"
                      fullWidth
                      value={formData.phone}
                      onChange={handleChange}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Website / LinkedIn"
                      name="website"
                      fullWidth
                      value={formData.website}
                      onChange={handleChange}
                      sx={inputStyle}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel
                        shrink
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                          mb: 1
                        }}
                      >
                        Partnership Intent *
                      </InputLabel>
                      <Select
                        name="intent"
                        value={formData.intent}
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          backgroundColor: "#fff",
                          color: "#000",
                          fontSize: { xs: "0.95rem", md: "1rem" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ccc"
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#256EFF"
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#999"
                          }
                        }}
                      >
                        <MenuItem disabled value="">
                          <em>Select your intent</em>
                        </MenuItem>
                        {intentOptions.map((option) => (
                          <MenuItem
                            key={option}
                            value={option}
                            sx={{ color: "#000", backgroundColor: "#fff" }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Conditionally show only if "Other" is selected */}
                  {formData.intent === "Other" && (
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Type of Support"
                        name="supportType"
                        fullWidth
                        required
                        value={formData.supportType}
                        onChange={handleChange}
                        sx={inputStyle}
                      />
                    </Grid>
                  )}

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleChange}
                        />
                      }
                      label="Subscribe to Eleos updates and newsletter"
                      sx={{ color: "#1A1A1A" }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      required
                      control={
                        <Checkbox
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                        />
                      }
                      label="I consent to being contacted about this partnership."
                      sx={{ color: "#1A1A1A" }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      sx={{
                        background: "linear-gradient(to right, #256EFF, #0A0908)",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: "1rem",
                        '&:hover': {
                          opacity: 0.9
                        }
                      }}
                    >
                      Submit Partnership Form
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PartnerForm;
