import "@/styles/fonts/style.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/uicons-bold-rounded/css/uicons-bold-rounded.css";
import "../styles/uicons-regular-rounded/css/uicons-regular-rounded.css";
import "../styles/uicons-solid-rounded/css/uicons-solid-rounded.css";
import "../styles/uicons-solid-straight/css/uicons-solid-straight.css";

import { authStateListener } from "@/services/firebase/auth/auth_state_listener";
import { setAuth, setLoading } from "@/services/store/slices/AuthSlice";
import { store } from "@/services/store/store";
import React from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    // Listen to auth state changes
    React.useEffect(() => {
        const unsubscribe = authStateListener((user) => {
            store.dispatch(setAuth(user));

            let timeout = setTimeout(() => {
                store.dispatch(setLoading(false));
                clearTimeout(timeout);
            }, 300);
        });
        unsubscribe();
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
