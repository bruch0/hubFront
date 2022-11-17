const storeUserInfo = (userInfo: any) =>
  localStorage.setItem("userInfo", userInfo);

const getUserInfo = () =>
  JSON.parse(localStorage.getItem("univesityInfo") ?? "");

const removeUserInfo = () => localStorage.removeItem("userInfo");

export { storeUserInfo, getUserInfo, removeUserInfo };
