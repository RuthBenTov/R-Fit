import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";


interface InputPasswordProps {
    onInput: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}


export const InputPassword = ({ onInput,children }: InputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    };

    const placeholder = children ? String(children) : "Password";

    return (
        <div>
            <FormControl variant="outlined" fullWidth size="small" margin="dense">
                <OutlinedInput placeholder={placeholder} type={showPassword ? 'text' : 'password'} endAdornment={<InputAdornment position="end"><IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" disableFocusRipple
                    disableRipple>{showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}</IconButton></InputAdornment>} onInput={onInput} />
            </FormControl>
        </div>
    )
}

