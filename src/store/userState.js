import { atom } from "recoil";

export const userState = atom({
    key: "userStateRecoil",       // プロジェクト全体で参照できる一意のKey情報を設定
    default: { isAdmin: false }
});