"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Our Story", href: "/story" },
  { label: "Partner", href: "/partner" },
  { label: "Contact", href: "/contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get current path

const toggleDrawer = (state) => () => {
  setOpen(state);
};


  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="default"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#fff",
          zIndex: 1300
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Stack direction="row" alignItems="center" spacing={2}>
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
              <Typography variant="h6" fontWeight="bold" sx={{ color: "#0A0908" }}>
                ELEOS
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Wellness & Rehabilitation
              </Typography>
            </Box>
          </Stack>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: isActive ? "#256EFF" : "#0A0908",
                    borderBottom: isActive ? "2px solid #256EFF" : "2px solid transparent",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    borderRadius: 0,
                    "&:hover": {
                      color: "#256EFF",
                      backgroundColor: "transparent",
                      borderBottom: "2px solid #256EFF"
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Contact Info & CTA (Desktop only) */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" sx={{ color: "#0A0908" }} />
              <Typography variant="body2" sx={{ color: "#0A0908" }}>
                +254722520122
              </Typography>
            </Stack>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#256EFF",
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                px: 3,
                "&:hover": { bgcolor: "#1D4ED8" }
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#0A0908" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={toggleDrawer(false)}
                    sx={{
                      backgroundColor: isActive ? "#F0F8FF" : "transparent"
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: {
                          color: isActive ? "#256EFF" : "#0A0908",
                          fontWeight: isActive ? 600 : 500
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <PhoneIcon fontSize="small" sx={{ color: "#0A0908" }} />
              <Typography variant="body2" sx={{ color: "#0A0908" }}>
                +254722520122
              </Typography>
            </Stack>
            <Button
              variant="contained"
              size="small"
              fullWidth
              sx={{
                bgcolor: "#256EFF",
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                "&:hover": { bgcolor: "#1D4ED8" }
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
