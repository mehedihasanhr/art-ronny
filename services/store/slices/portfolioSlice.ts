import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PortfolioType = {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
};

interface InitialState {
    portfolios: PortfolioType[];
    loading: boolean;
    error: any;
}

// initialState
const initialState: InitialState = {
    portfolios: [],
    loading: false,
    error: null,
};

const portfolioSlice = createSlice({
    name: "portfolios",
    initialState,
    reducers: {
        setPortfolios: (state, action) => {
            state.portfolios = action.payload;
        },
        addPortfolio: (state, action: PayloadAction<PortfolioType>) => {
            state.portfolios.push(action.payload);
        },
        removePortfolio: (state, action: PayloadAction<string>) => {
            state.portfolios = state.portfolios.filter((portfolio) => portfolio.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload;
        },
    },
});

export default portfolioSlice.reducer;

export const { setPortfolios, addPortfolio, removePortfolio, setLoading, setError } = portfolioSlice.actions;
