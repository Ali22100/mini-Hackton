import React, { useState } from "react";
import { Box, TextField, Button, Typography, InputAdornment } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { keyframes } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Background gradient animation
const gradientBG = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("userId", user.uid);

      navigate("/");
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert(error.message);
    }
  };

  const inputStyle = {
    input: { color: "#fff" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "rgba(199,125,255,0.3)" },
      "&:hover fieldset": { borderColor: "#c77dff" },
      "&.Mui-focused fieldset": { borderColor: "#c77dff" },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#bbb",
      opacity: 1,
    },
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
          background: "rgba(20, 0, 40, 0.35)",
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
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            placeholder="Full Name"
            type="text"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#c77dff" }} />
                </InputAdornment>
              ),
            }}
            sx={inputStyle}
          />
          <TextField
            fullWidth
            placeholder="Email"
            type="email"
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
            sx={inputStyle}
          />
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
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
            sx={inputStyle}
          />

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              marginTop: "25px",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#c77dff",
              borderColor: "#c77dff",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "rgba(199,125,255,0.1)",
                boxShadow: "0 0 20px rgba(199,125,255,0.8)",
              },
            }}
          >
            Sign Up
          </Button>
        </form>

        <Typography
          sx={{
            textAlign: "center",
            marginTop: "20px",
            color: "#aaa",
          }}
        >
          Already have an account?{" "}
          <span
            style={{ color: "#c77dff", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
