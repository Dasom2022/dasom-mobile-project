import { atom } from "recoil";

export const selectedPrice=atom({
    key:"selectedPrice",
    default:0
})
export const allSelect=atom({
    key:"allSelect",
    default:false
})
export const allSelectCancel=atom({
    key:"cancel",
    default:false
})