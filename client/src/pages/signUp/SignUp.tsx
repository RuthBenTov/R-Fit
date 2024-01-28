import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { InputPassword } from "../../components/passwordInput/Password";
import { toast } from "react-toastify";
import { register } from "../../API/userApi";
import "./scss/signUp.scss";
import AppBarProps from "../../components/appbar/AppBar";

const SignUp = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      if (password != matchPassword) {
        toast.error("Passwords do not match");
      }
      if (!userName || !password || !email || !birthday || !phone || !name) {
        toast.info("Please fill all fileds");
        return;
      }
      const newUser = { userName, password, email, birthday, phone, name };
      const response = await register(newUser);

      if (response && response.data.results[0]) {
        if (response.data.results[0].error === "User already exist") {
          toast.error("User with this name already exists");
          return;
        } else {
          toast.success("Registration successful");
          handleLogin();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {
    navigate("/sign-in");
  };
  const handleInputChange = (event: any) => {
    const numericValue = event.target.value.replace(/\D/g, "");
    setPhone(numericValue);
  };
  return (
    <div className="signUp">
      <AppBarProps />
      <Container sx={{width: "30%", padding: "0px 4px 35px 3px", border: "1px solid gray", marginRight: "170px", borderRadius: "12px", textAlign: "center",
          marginTop: "70px", backgroundColor: "rgba(255, 255, 255, 0.4)",}}
      >
        <h2 style={{color: "#413b2b", marginBottom: "35px", fontSize: "45px", fontWeight: "bolder", letterSpacing: ".15em", textShadow: "-3px 2px 1px #ffff",}}>
          Sign Up
        </h2>
        <Box sx={{ width: "100%" }}>
          <TextField variant="outlined" className="textField" fullWidth label="Username" type="text" size="small" value={userName} placeholder="Username"
            onChange={(ev) => setUserName(ev.target.value)}
          />
          <TextField variant="outlined" className="textField" label="Name" fullWidth type="text" size="small" value={name} placeholder="Name"
            onChange={(ev) => setName(ev.target.value)}
          />
          <TextField variant="outlined" className="textField" fullWidth type="date" size="small" label="Date of birth" value={birthday}
            onChange={(ev) => setBirthday(ev.target.value)} InputLabelProps={{ shrink: true }}
          />
          <TextField variant="outlined" className="textField" fullWidth type="email" size="small" label="Email Address" value={email} placeholder="Email Address"
            onChange={(ev) => setEmail(ev.target.value)} 
          />
          <TextField variant="outlined" fullWidth size="small" label="Phone Number" placeholder="Phone Number" value={phone}
            onChange={handleInputChange} inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <InputPassword showError={true} onInput={(ev) => setPassword(ev.target.value)} />
          <InputPassword showError={false} children="Confirm password" onInput={(ev) => setMatchPassword(ev.target.value)} />
          <Button onClick={handleSignUp} size="small" variant="contained" type="submit"
            sx={{ backgroundColor: "#413b2b", color: "white" }}
          >Signup</Button>
          <div style={{ marginBottom: '19px', marginTop: '19px' }}>
            <div style={{padding: "3px 3px", border: "1px solid gray", margin: "auto", width: "1px", borderRadius: "12px", textAlign: "center",}}></div>
          </div>
          <Button size="small" sx={{ backgroundColor: "#413b2b" }} onClick={handleLogin} variant="contained">Login</Button>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
