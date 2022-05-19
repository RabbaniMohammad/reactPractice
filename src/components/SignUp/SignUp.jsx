import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function SignUp() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <br />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      <br />
      <TextField id="filled-basic" label="Email" variant="filled" />
      <br />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <br />
      <TextField id="filled-basic" label="Re Enter Password" variant="filled" />
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="text">SignUp</Button>
      </Stack>
    </Box>
  );
}
