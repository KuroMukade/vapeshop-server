import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, UserDispatch } from "../store/store";

export const useUserDispatch = () => useDispatch<UserDispatch>();
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;