
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/indexRedusers";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;