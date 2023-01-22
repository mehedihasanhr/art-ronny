import { createSlice } from "@reduxjs/toolkit";

type ClientType = {
    id: number | string;
    image: string;
};

interface ClientState {
    clients: ClientType[];
    loading: boolean;
    error: string | null;
}

const initialState: ClientState = {
    clients: [],
    loading: false,
    error: null,
};

const clientSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        setClients(state, action) {
            state.clients = action.payload;
        },
        addClient(state, action) {
            state.clients.push(action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setClients, addClient, setLoading, setError } = clientSlice.actions;

export default clientSlice.reducer;
