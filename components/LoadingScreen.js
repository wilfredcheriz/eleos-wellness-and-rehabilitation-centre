"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#0A0908",
        color: "#FCFCFC",
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-geist-sans)",
        transition: "opacity 0.3s ease",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          border: "6px solid #256EFF",
          borderTop: "6px solid #FCFCFC",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <Typography sx={{ mt: 2, fontSize: "1.2rem" }}>
        Welcome To Eleos Wellness...
      </Typography>

      {/* CSS keyframes injected in <style> to avoid JSX scoping issues */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
}
