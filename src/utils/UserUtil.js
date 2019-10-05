export const getUserName = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user.username;
}