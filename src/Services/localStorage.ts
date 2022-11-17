const storeUserInfo = (userInfo: any): void =>
  localStorage.setItem("userInfo", userInfo);

const getUserInfo = (): string =>
  JSON.parse(localStorage.getItem("univesityInfo") ?? "");

const removeUserInfo = (): void => localStorage.removeItem("userInfo");

export { storeUserInfo, getUserInfo, removeUserInfo };
