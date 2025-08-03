// components/LoadingScreen.js
"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
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
      <div className="loader" />
      <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>Welcome To Eleos Wellness...</p>

      <style jsx>{`
        .loader {
          width: 60px;
          height: 60px;
          border: 6px solid #256EFF;
          border-top: 6px solid #FCFCFC;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
