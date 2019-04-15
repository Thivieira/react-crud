export default (state = {}, action) => {
  switch (action.type) {
    case 'IN_ADMIN':
      return {
        ...state,
        articles: action.payload.articles
      };
    default:
      return state;
  }
};
