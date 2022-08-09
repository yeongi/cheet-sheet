import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import userHandler from "../../lib/handler/userHandler";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setName] = useState("");
  const [password, setPW] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const passwordChange = (e) => {
    setPW(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await userHandler.login({
      id: username,
      pwd: password,
    });

    dispatch({
      type: "LOGIN",
      info: {
        num: 1,
        id: 1,
        token: "token",
        isLogin: true,
      },
    });
    console.log(username, password, result);
  };

  return (
    <div>
      <h1>
        서비스를 이용하시려면 <br /> 로그인을 해야합니다.
      </h1>
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
