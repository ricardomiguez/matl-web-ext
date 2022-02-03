import React, { useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import EyeSvgIcon from "../../assets/icons/Eye";

const PasswordTextField = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl sx={{ width: "20rem" }}>
      <InputLabel htmlFor="password">Palavra-passe</InputLabel>
      <OutlinedInput id="password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        label="Palavra-passe"
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
              <EyeSvgIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default PasswordTextField;
