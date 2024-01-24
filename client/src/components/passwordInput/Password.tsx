import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";


interface InputPasswordProps {
    onInput: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
    showError: boolean;
}


export const InputPassword = ({ onInput, children, showError = true }: InputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    };

    const placeholder = children ? String(children) : "Password";

    const validatePassword = (inputPassword: string) => {
        const passwordRegex = /^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*\d).{10,}$/;
        return passwordRegex.test(inputPassword);
    }

    return (
        <div>
            <FormControl variant="outlined" fullWidth size="small" margin="dense">
                <OutlinedInput placeholder={placeholder} type={showPassword ? 'text' : 'password'} endAdornment={<InputAdornment position="end"><IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" disableFocusRipple
                    disableRipple>{showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}</IconButton></InputAdornment>} onInput={(ev: React.ChangeEvent<HTMLInputElement>) => {
                        const inputPassword = ev.target.value; onInput(ev); if (!validatePassword(inputPassword)) {
                            setError("Password must have at least two letters and be 10 characters long")
                        } else { setError("") };
                    }} />
                {showError && error && <p style={{ color: "#751313" }}>{error}</p>}
            </FormControl>
        </div>
    )
}

