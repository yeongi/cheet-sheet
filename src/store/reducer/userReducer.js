const initialUserState = {
  //유저 상태를 파악 해줌
  num: "",
  id: "",
  token: "",
  isLogin: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("리듀서로 넘어오는 정보,", action.info);
      const info = action.info;
      return {
        num: info.num,
        id: info.id,
        token: info.token,
        isLogin: true,
      };
    case "LOGOUT":
      return initialUserState;
    default:
      return initialUserState;
  }
};

export default userReducer;
