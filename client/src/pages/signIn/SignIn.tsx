import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import './signIn.scss';
import { InputPassword } from "../../components/passwordInput/Password";
import { useNavigate } from "react-router-dom";
import AppBarProps from "../../components/appbar/AppBar";
import { login } from "../../API/userApi";


const SignIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      if (!userName || !password) {
        toast.info("Please fill all fileds");
        return;
      }
      const response = await login(userName, password)

      if (response?.data.ok) {
        console.log('Login successful');
        toast.success("Login successful");
        navigate("/schedule")
      } else {
        console.error('Login failed:', response?.data.error);
        toast.error("Password or username are incorrect.");
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <div className="signIn">
      <AppBarProps />
      <Container
        sx={{
          padding: "0px 4px 35px 3px",
          border: "1px solid gray",
          borderRadius: "12px",
          marginTop:"70px",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          textAlign: "center"
        }}
      >
        <h2
          style={{ color: "#54a23c", marginBottom: "35px", fontSize: "45px",fontWeight:"bolder",
          letterSpacing: ".15em",
          textShadow: "-3px 6px 1px black"}}
        >
          Sign in
        </h2>
        <Box sx={{ width: "100%" }}>
          <TextField
            variant="outlined"
            className="textField userNameInput"
            fullWidth
            type="text"
            size="small"
            value={userName}
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
              handleSignIn();
            }}
            size="small"
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#54a23c", color: "black", padding: "10px" }}
          >
            Login
          </Button>
          <p
            style={{
              paddingBottom: "150px",
              textAlign: "center",
            
            }}
          >
            Forget your password?
          </p>
          <Button
            onClick={() => {
              navigate("/sign-up");
            }}
            size="small"
            sx={{ backgroundColor: "#54a23c",color:"black" }}
            variant="contained"
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;

