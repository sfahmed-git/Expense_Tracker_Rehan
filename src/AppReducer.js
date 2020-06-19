export default (state, action) => {
  switch (action.type) {
    case "Delete_Item":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "Add_Item":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    default:
      return state;
  }
};
