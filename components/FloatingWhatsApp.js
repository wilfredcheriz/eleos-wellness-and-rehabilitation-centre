"use client";

import React from "react";
import { Fab, Tooltip, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsApp = () => {
  const phoneNumber = "+254722520122";
  const message = "Hello, I’m interested in your services.";

  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <Zoom in>
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <Fab
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1300,
            backgroundColor: "#25D366",
            color: "#fff",
            boxShadow: 6,
            animation: "pulse 2s infinite",
            "&:hover": {
              backgroundColor: "#1ebe5d",
              animation: "none", // stops pulsing on hover for clarity
            },
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
                boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
              },
              "70%": {
                transform: "scale(1.05)",
                boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)",
              },
              "100%": {
                transform: "scale(1)",
                boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
              },
            },
          }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default FloatingWhatsApp;
