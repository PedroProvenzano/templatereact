const initState = {
  _id: null,
};

const localReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return (state = initState);
    default:
      return { ...state };
  }
};

export default localReducer;
