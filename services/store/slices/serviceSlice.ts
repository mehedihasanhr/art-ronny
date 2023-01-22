import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ServiceType = {
    id: string;
    title: string;
    description: string;
    image: string;
};

interface InitialState {
    services: ServiceType[];
    loading: boolean;
    error: any;
}

// Initial State
const initialState: InitialState = {
    services: [],
    loading: false,
    error: null,
};

const serviceSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        addServices: (state, action) => {
            state.services = action.payload;
        },
        addService: (state, action: PayloadAction<ServiceType>) => {
            state.services.push(action.payload);
        },
        removeService: (state, action: PayloadAction<string>) => {
            state.services = state.services.filter((service) => service.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload;
        },
    },
});

export default serviceSlice.reducer;

export const { addServices, addService, removeService, setLoading, setError } = serviceSlice.actions;
