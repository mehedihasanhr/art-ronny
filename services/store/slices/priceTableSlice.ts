import { createSlice } from "@reduxjs/toolkit";

export type PriceTableType = {
    id: string;
    title: string;
    standard: boolean;
    startup: boolean;
    gold: boolean;
};

interface InitialState {
    priceTables: PriceTableType[];
    loading: false;
    error: any;
}

const initialState: InitialState = {
    priceTables: [],
    loading: false,
    error: null,
};

// create slice
const priceTableSlice = createSlice({
    name: "priceTable",
    initialState,
    reducers: {
        fetchPriceTables: (state, action) => {
            state.priceTables = action.payload;
        },
        addPriceTable: (state, action) => {
            state.priceTables.push(action.payload);
        },
        deletePriceTable: (state, action) => {
            state.priceTables = state.priceTables.filter((priceTable) => priceTable.id !== action.payload);
        },
        updatePriceTable: (state, action) => {
            state.priceTables = state.priceTables.map((priceTable) =>
                priceTable.id === action.payload.id ? action.payload : priceTable,
            );
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { fetchPriceTables, addPriceTable, deletePriceTable, updatePriceTable, setLoading, setError } =
    priceTableSlice.actions;

export default priceTableSlice.reducer;
