import { useSelector as useReduxSelect, TypedUseSelectorHook } from "react-redux";//使用use 防止命名冲突
import { RootState } from "./store";

export const useSelector : TypedUseSelectorHook<RootState> =useReduxSelect;
