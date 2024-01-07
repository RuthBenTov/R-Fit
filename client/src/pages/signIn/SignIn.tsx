import { Box, Button, Container, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { InputPassword } from "../../components/passwordInput/Password";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [textUserName, setUserName] = useState("");
  const [textPassword, setPassword] = useState("");

  async function handleSignIn(userName: string, password: string) {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/API/users/login",
        { userName, password }
      );
      if (data.process === "OK") {
        console.log(userName + password + "---success");
        navigate("/logbook");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Container
        sx={{
          padding: "0px 4px 35px 3px",
          border: "1px solid gray",
          borderRadius: "12px",
        }}
      >
        <h2
          style={{ color: "#6467d4", marginBottom: "35px", fontSize: "25px" }}
        >
          SignIn
        </h2>
        <Box sx={{ width: "100%" }}>
          <TextField
            variant="outlined"
            className="textField userNameInput"
            fullWidth
            type="text"
            size="small"
            value={textUserName}
            placeholder="User name"
            onChange={(ev) => {
              setUserName(ev.target.value);
            }}
          />
          <InputPassword
            onInput={(ev) => {
              setPassword(ev.target.value);
            }}
          />
          <Button
            onClick={() => {
              handleSignIn(textUserName, textPassword);
            }}
            size="small"
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#6467d4", color: "white", padding: "10px" }}
          >
            Login
          </Button>
          <p
            style={{
              paddingBottom: "150px",
              textAlign: "center",
              color: "gray",
            }}
          >
            Forget your password?
          </p>
          <Button
            onClick={() => {
              navigate("/sign-up");
            }}
            size="small"
            sx={{ color: "#6467d4" }}
            variant="outlined"
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
