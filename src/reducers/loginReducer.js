const initState = {
  _id: null,
  Token: null,
  Role: null,
  isActive: null,
  UserName: null,
  iat: null,
  exp: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.payload);
    case "TOKEN":
      return {
        ...state,
        Token: action.Token,
      };
    case "UPDATE":
      return {
        ...state,
        Role: action.payload.Role,
        UserName: action.payload.UserName,
        isActive: action.payload.isActive,
        _id: action.payload._id,
      };
    case "START_UPDATE":
      return {
        ...state,
        Role: action.payload.Role,
        UserName: action.payload.UserName,
        _id: action.payload._id,
      };
    case "LOGOUT":
      return (state = initState);
    default:
      return { ...state };
  }
};

export default loginReducer;
