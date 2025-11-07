import React from "react";
import { Box,TextField } from "@mui/material";
import { Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { FormControlLabel } from "@mui/material";
import Link from "@mui/material/Link";
import { Checkbox } from "@mui/material";
import "./styles.css";

function SignIn() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <div>
       <div className="align">
      <div className="signIn-container">
        <h1>
          <b>Sign In</b>
        </h1>
        <p className="sub-heading">please fill in this form</p>

        <TextField
          id="filled-basic"
          label="first name"
          variant="filled"
        ></TextField>
        <TextField
          id="filled-basic"
          label="last name"
          variant="filled"
        ></TextField>
        <TextField id="filled-basic" label="Email" variant="filled"></TextField>
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
        ></TextField>
        <TextField
          id="filled-basic"
          label="Confirm Password"
          variant="filled"
        ></TextField>
        <Button variant="contained" onClick={handleClick}>Sign In</Button>
      </div>
    </div>
    </div>
   
  );
}
// function SignIn() {
//   const validateInputs = () => {};

//   const handleClickOpen = () => {};

//   return (
//     <div>
//         <Box>
//       <FormControl>
//         <FormLabel htmlFor="email">Email</FormLabel>
//         <TextField
//           id="email"
//           type="email"
//           name="email"
//           placeholder="your@email.com"
//           autoComplete="email"
//           autoFocus
//           required
//           fullWidth
//           variant="outlined"
//         />
//       </FormControl>
//       <FormControl>
//         <FormLabel htmlFor="password">Password</FormLabel>
//         <TextField
//           name="password"
//           placeholder="••••••"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           autoFocus
//           required
//           fullWidth
//           variant="outlined"
//         />
//       </FormControl>
//       <FormControlLabel
//         control={<Checkbox value="remember" color="primary" />}
//         label="Remember me"
//       />

//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         onClick={validateInputs}
//       >
//         Sign in
//       </Button>
//       <Link
//         component="button"
//         type="button"
//         onClick={handleClickOpen}
//         variant="body2"
//         sx={{ alignSelf: "center" }}
//       >
//         Forgot your password?
//       </Link>
//       </Box>
//     </div>
//   );
// }

export default SignIn;
