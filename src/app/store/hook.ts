import type { rootType, AppDispatch } from "@/app/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootType> = useSelector;
