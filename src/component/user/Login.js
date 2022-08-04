import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPW] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const passwordChange = (e) => {
    setPW(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(username, password);
  };

  return (
    <div>
      <h1>로그인</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <TextField
          id="outliend-name"
          label="User"
          variant="outlined"
          value={username}
          onChange={nameChange}
        />
        <br />
        <TextField
          id="outliend-name"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={passwordChange}
        />
        <br />
        <Button type="submit" variant="outlined">
          제출하기
        </Button>
      </Box>
    </div>
  );
};

export default Login;
