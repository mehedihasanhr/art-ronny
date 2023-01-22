import { createSlice } from "@reduxjs/toolkit";

export type PriceCardType = {
    id: string;
    title: string;
    price: string;
    description: string;
    features: {
        name: string;
        isAvailable: boolean;
    }[];
};

interface InitialState {
    priceCards: PriceCardType[];
    loading: false;
    error: any;
}

const initialState: InitialState = {
    priceCards: [],
    loading: false,
    error: null,
};

// create slice
const priceCardSlice = createSlice({
    name: "priceCard",
    initialState,
    reducers: {
        fetchPriceCards: (state, action) => {
            state.priceCards = action.payload;
        },

        addPriceCard: (state, action) => {
            state.priceCards.push(action.payload);
        },

        deletePriceCard: (state, action) => {
            state.priceCards = state.priceCards.filter((priceCard) => priceCard.id !== action.payload);
        },

        updatePriceCard: (state, action) => {
            state.priceCards = state.priceCards.map((priceCard) =>
                priceCard.id === action.payload.id ? action.payload : priceCard,
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

export const { fetchPriceCards, addPriceCard, deletePriceCard, updatePriceCard, setLoading, setError } =
    priceCardSlice.actions;

export default priceCardSlice.reducer;
