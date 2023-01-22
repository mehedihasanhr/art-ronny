import { createSlice } from "@reduxjs/toolkit";

export type HeroSliderType = {
    id: string | number;
    image: string;
};

interface heroSliderState {
    heroSliders: HeroSliderType[];
    loading: boolean;
    error: string | null;
}

const initialState: heroSliderState = {
    heroSliders: [],
    loading: false,
    error: null,
};

const heroSliderSlice = createSlice({
    name: "heroSliders",
    initialState,
    reducers: {
        setheroSliders(state, action) {
            state.heroSliders = action.payload;
        },
        addSlider(state, action) {
            state.heroSliders.push(action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setheroSliders, addSlider, setLoading, setError } = heroSliderSlice.actions;

export default heroSliderSlice.reducer;
