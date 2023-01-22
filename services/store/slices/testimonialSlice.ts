import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestimonialType = {
    id: string;
    title: string;
    description: string;
    rating: number;
    image: string;
    videoUrl: string;
    avatar: string;
    name: string;
    slug: string;
};

interface InitialState {
    testimonials: TestimonialType[];
    loading: boolean;
    error: any;
}

// Initial State
const initialState: InitialState = {
    testimonials: [],
    loading: false,
    error: null,
};

const testimonialSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: {
        addTestimonials: (state, action) => {
            state.testimonials = action.payload;
        },
        addTestimonial: (state, action: PayloadAction<TestimonialType>) => {
            state.testimonials.push(action.payload);
        },
        removeService: (state, action: PayloadAction<string>) => {
            state.testimonials = state.testimonials.filter((testimonial) => testimonial.id !== action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload;
        },
    },
});

export default testimonialSlice.reducer;

export const { addTestimonials, addTestimonial, removeService, setLoading, setError } = testimonialSlice.actions;
