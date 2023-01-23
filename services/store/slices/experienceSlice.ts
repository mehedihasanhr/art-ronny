import { createSlice } from "@reduxjs/toolkit";

export type ExperienceType = {
    id: string;
    duration: {
        start: string;
        end: string;
    };
    company: string;
    position: string;
    description: string;
    location: string;
};

interface ExperienceState {
    experiences: ExperienceType[];
    loading: boolean;
    error: string | null;
}

const initialState: ExperienceState = {
    experiences: [],
    loading: true,
    error: null,
};

// EXPERIENCE SLICE
const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        setExperiences: (state, action) => {
            state.experiences = action.payload;
            state.loading = false;
        },

        addExperience: (state, action: { payload: ExperienceType }) => {
            state.experiences.push(action.payload);
        },

        removeExperience: (state, action: { payload: string }) => {
            state.experiences = state.experiences.filter((experience) => experience.id !== action.payload);
        },

        setLoading: (state, action: { payload: boolean }) => {
            state.loading = action.payload;
        },

        setError: (state, action: { payload: string }) => {
            state.error = action.payload;
        },
    },
});

export const { setExperiences, addExperience, removeExperience, setLoading, setError } = experienceSlice.actions;

export default experienceSlice.reducer;
