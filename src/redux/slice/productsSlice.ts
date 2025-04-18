import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsState {
  items: Product[]; 
  filteredItems: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  filteredItems: [], 
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return response.data;
  }
);

export const fetchProductsByCategory = createAsyncThunk<Product[], string>(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
  }
);

export const fetchLatestProducts = createAsyncThunk<Product[],number>(
  "products/fetchLatest",
  async (limit: number) => {
    const response = await axios.get<Product[]>(`https://fakestoreapi.com/products?limit=${limit}`);
    return response.data;
  }
);

export const addProduct = createAsyncThunk<Product, Omit<Product, "id">>(
  "products/addProduct",
  async (newProduct) => {
    const response = await axios.post<Product>(
      "https://fakestoreapi.com/products",
      newProduct
    );
    return response.data;
  }
);

export const updateProduct = createAsyncThunk<Product, Product>(
  "products/updateProduct",
  async (product) => {
    const response = await axios.put<Product>(
      `https://fakestoreapi.com/products/${product.id}`,
      product
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk<number, number>(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    return id;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductsByCategory: (state, action: PayloadAction<string | null>) => {
      if (action.payload === null) {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter((product) => product.category === action.payload);
      }
    },
  }, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.status = "succeeded";
      state.items = action.payload;
      state.filteredItems = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? "حدث خطأ غير معروف";
    })
    .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
    });
    
  },
});
export const { filterProductsByCategory } = productsSlice.actions;
export default productsSlice.reducer;
