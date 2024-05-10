import { configureStore } from "@reduxjs/toolkit";
import getSpaceXData from "../features/createSlice";

export const store = configureStore({
    reducer: {
        app: getSpaceXData
    }
})