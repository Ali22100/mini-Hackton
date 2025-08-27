import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, rgba(15, 15, 30, 0.9), rgba(25, 0, 50, 0.9))", // deep glass gradient
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(199,125,255,0.3)", // purple border
        boxShadow: "0 4px 20px rgba(199,125,255,0.3)", // glow
        backgroundColor: "rgba(15, 15, 30, 0.95)", // fallback (no white flash)
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Brand */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: 1,
            fontFamily: "'Poppins', sans-serif",
            color: "#c77dff",
            textShadow: "0 0 10px rgba(199,125,255,0.8)",
          }}
        >
          Welcome User
        </Typography>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            onClick={handleLogout}
            sx={{
              px: 3,
              py: 1,
              borderRadius: 3,
              fontWeight: "bold",
              border: "1px solid #c77dff",
              background: "transparent",
              color: "#c77dff",
              textTransform: "none",
              boxShadow: "0 0 12px rgba(199,125,255,0.4)",
              transition: "0.3s",
              "&:hover": {
                background: "rgba(199,125,255,0.1)",
                boxShadow: "0 0 18px rgba(199,125,255,0.8)",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
