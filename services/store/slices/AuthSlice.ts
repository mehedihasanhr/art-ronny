import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

interface AuthState {
    auth: any;
    loading: boolean;
    error: any;
}

const initialState: AuthState = {
    auth: null,
    loading: true,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export default authSlice.reducer;

export const { setAuth, setLoading, setError } = authSlice.actions;
