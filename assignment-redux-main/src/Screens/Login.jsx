import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { keyframes } from "@mui/system";

// Background gradient animation
const gradientBG = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));
    if (!result.error) {
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(-45deg, #0f001f, #1a0033, #250044, #0a001a)",
        backgroundSize: "400% 400%",
        animation: `${gradientBG} 12s ease infinite`,
      }}
    >
      <Box
        sx={{
          maxWidth: "480px",
          width: "100%",
          padding: "45px",
          borderRadius: "20px",
          background: "rgba(20, 0, 40, 0.35)", // Glass effect
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(199,125,255,0.3)",
          color: "#fff",
          animation: `${fadeIn} 0.8s ease-in-out`,
          boxShadow: "0 0 30px rgba(106,13,173,0.6)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            fontWeight: "bold",
            color: "#c77dff",
          }}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <TextField
            fullWidth
            placeholder="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#c77dff" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                borderRadius: "10px",
                "& fieldset": { borderColor: "rgba(199,125,255,0.4)" },
                "&:hover fieldset": {
                  borderColor: "#c77dff",
                  boxShadow: "0 0 8px rgba(199,125,255,0.6)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#c77dff",
                  boxShadow: "0 0 12px rgba(199,125,255,0.9)",
                },
              },
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#c77dff" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                borderRadius: "10px",
                "& fieldset": { borderColor: "rgba(199,125,255,0.4)" },
                "&:hover fieldset": {
                  borderColor: "#c77dff",
                  boxShadow: "0 0 8px rgba(199,125,255,0.6)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#c77dff",
                  boxShadow: "0 0 12px rgba(199,125,255,0.9)",
                },
              },
            }}
          />

          {/* Login Button */}
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            disabled={isloading}
            sx={{
              marginTop: "25px",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#c77dff",
              borderColor: "#c77dff",
              borderRadius: "25px",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "rgba(199,125,255,0.1)",
                boxShadow: "0 0 20px rgba(199,125,255,0.8)",
              },
            }}
          >
            {isloading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <Typography
          sx={{
            textAlign: "center",
            marginTop: "20px",
            color: "#aaa",
          }}
        >
          <span
            style={{
              color: "#c77dff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
