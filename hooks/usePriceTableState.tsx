import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { addDocument } from "@/services/firebase/db/add_document";
import { getDocuments } from "@/services/firebase/db/get_documents";
import {
    fetchPriceTables as fetchPriceTablesAction,
    addPriceTable as addPriceTableAction,
    deletePriceTable as deletePriceTableAction,
    updatePriceTable,
    setLoading,
    setError,
    PriceTableType,
} from "@/services/store/slices/priceTableSlice";
import { deleteDocument } from "@/services/firebase/db/delete_document";

export const usePriceTableState = () => {
    const dispatch = useAppDispatch();
    const { priceTables, loading, error } = useAppSelector((state) => state.priceTables);

    React.useEffect(() => {
        fetchPriceTables();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // fetch price tables
    const fetchPriceTables = React.useCallback(async () => {
        dispatch(setLoading(true));
        try {
            const priceTables = await getDocuments("priceTables");
            dispatch(fetchPriceTablesAction(priceTables));
        } catch (error: any) {
            dispatch(setError(error.message));
        }
        dispatch(setLoading(false));
    }, [dispatch]);

    // add price table
    const addPriceTable = async (priceTable: any) => {
        dispatch(setLoading(true));
        try {
            const newPriceTable = await addDocument("priceTables", priceTable);
            dispatch(addPriceTableAction(newPriceTable));
        } catch (error: any) {
            dispatch(setError(error.message));
        }
        dispatch(setLoading(false));
    };

    const deletePriceTable = async (id: string) => {
        dispatch(setLoading(true));
        try {
            await deleteDocument("priceTables", id);
            dispatch(deletePriceTableAction(id));
        } catch (error: any) {
            dispatch(setError(error.message));
        }
        dispatch(setLoading(false));
    };

    return {
        priceTables,
        loading,
        error,
        fetchPriceTables,
        addPriceTable,
        deletePriceTable,
    };
};
