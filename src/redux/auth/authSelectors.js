const getIsLogIn = state => state.auth.isLogIn;

const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLogIn,
  getUsername,
};

export default authSelectors;
