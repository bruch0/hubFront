const storeUserInfo = (userInfo: any): void =>
  localStorage.setItem("userInfo", userInfo);

const getUserInfo = (): string | null => localStorage.getItem("userInfo");

const removeUserInfo = (): void => localStorage.removeItem("userInfo");

export { storeUserInfo, getUserInfo, removeUserInfo };
