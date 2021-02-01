const getIsLogIn = state => state.auth.isLogIn;
const getUsername = state => state.auth.user.name;
const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLogIn,
  getUsername,
  getIsRefreshing,
};

export default authSelectors;
