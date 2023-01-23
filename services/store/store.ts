import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import portfolioSlice from "./slices/portfolioSlice";
import serviceSlice from "@/services/store/slices/serviceSlice";
import testimonialSlice from "./slices/testimonialSlice";
import clientSlice from "./slices/clientSlice";
import heroSliderSlice from "./slices/heroSliderSlice";
import priceCardSlice from "./slices/priceCardSlice";
import PriceTableSlice from "./slices/priceTableSlice";
import experienceSlice from "./slices/experienceSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        portfolios: portfolioSlice,
        services: serviceSlice,
        testimonials: testimonialSlice,
        clients: clientSlice,
        heroSliders: heroSliderSlice,
        priceCards: priceCardSlice,
        priceTables: PriceTableSlice,
        experiences: experienceSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
