import { atom } from "recoil";

export const selectedPrice = atom({
  key: "selectedPrice",
  default: 0,
});
export const allSelect = atom({
  key: "allSelect",
  default: false,
});
export const allSelectCancel = atom({
  key: "cancel",
  default: false,
});

// 유저 정보가 담길 데이터
export const userInfoData = atom<any>({
  key: "userInfoData",
  default: [],
  // effects_UNSTABLE: [persistAtom],
});

export const naverToken = atom<any>({
  key: "naverToken",
  default: "",
});
