const initialUserState = {
  //유저 상태를 파악 해줌
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;
    case "LOGOUT":
      return;
    default:
      return state;
  }
};

export default userReducer;
