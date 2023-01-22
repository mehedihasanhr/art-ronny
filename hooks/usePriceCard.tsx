import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { getDocuments } from "@/services/firebase/db/get_documents";
import { updateDocument } from "@/services/firebase/db/update_document";

import {
    fetchPriceCards,
    addPriceCard,
    deletePriceCard,
    updatePriceCard,
    setLoading,
    setError,
} from "@/services/store/slices/priceCardSlice";

export const usePriceCard = () => {
    const { priceCards, loading, error } = useAppSelector((state) => state.priceCards);
    const dispatch = useAppDispatch();
    const [updating, setUpdating] = React.useState(false);

    React.useEffect(() => {
        fetchPriceCardsHandler();
    }, []);

    // fetch price cards from database
    const fetchPriceCardsHandler = React.useCallback(async () => {
        dispatch(setLoading(true));
        try {
            const priceCards = await getDocuments("priceCards");
            dispatch(fetchPriceCards(priceCards));
        } catch (error: any) {
            dispatch(setError(error.message));
        }
        dispatch(setLoading(false));
    }, [dispatch]);

    // update price card
    const updatePriceCardHandler = React.useCallback(
        async (id: string, data: any) => {
            setUpdating(true);
            try {
                await updateDocument("priceCards", id, data);
                await fetchPriceCardsHandler();
            } catch (error: any) {
                dispatch(setError(error.message));
            }
            setUpdating(false);
        },
        [dispatch, fetchPriceCardsHandler],
    );

    return {
        priceCards,
        loading,
        error,
        updating,
        fetchPriceCardsHandler,
        updatePriceCardHandler,
    };
};
