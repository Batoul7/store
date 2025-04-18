import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slice/productsSlice";
import categoriesReducer from "../slice/categoriesSlice";
import sidebarReducer from "../slice/sidebarSlice";
import cartReduser from "../slice/cartSlice";
import paginationReducer from "../slice/paginationSlice"

import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    sidebar: sidebarReducer,
    cart:cartReduser,
    pagination: paginationReducer, 
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;