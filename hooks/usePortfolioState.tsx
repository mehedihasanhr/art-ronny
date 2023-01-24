import * as React from "react";
import { useAppSelector, useAppDispatch } from "@/services/store/hooks";
import {
    setPortfolios,
    addPortfolio as addPortfolioState,
    setLoading,
    setError,
} from "@/services/store/slices/portfolioSlice";
import { addDocument } from "@/services/firebase/db/add_document";
import { PortfolioType } from "@/services/store/slices/portfolioSlice";
import { getDocuments } from "@/services/firebase/db/get_documents";
import { deleteDocument } from "@/services/firebase/db/delete_document";

export const usePortfolioState = () => {
    const { portfolios, loading, error } = useAppSelector((state) => state.portfolios);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        getAllPortfolios();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // add a new portfolio
    const addPortfolio = async (portfolio: any) => {
        dispatch(setLoading(true));

        await addDocument("portfolios", portfolio).then((res: PortfolioType) => {
            if (res && res.id) {
                dispatch(addPortfolioState(res));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                dispatch(setError("Something went wrong"));
            }
        });
    };

    // get all portfolios
    const getAllPortfolios = React.useCallback(async () => {
        if (portfolios.length > 0) return;

        dispatch(setLoading(true));

        await getDocuments("portfolios").then((res: PortfolioType[]) => {
            if (res) {
                dispatch(setPortfolios(res));
                dispatch(setError(""));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                dispatch(setError("Something went wrong"));
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    // delete a portfolio
    const deletePortfolio = async (id: string) => {
        await deleteDocument("portfolios", id).then((res: any) => {
            getAllPortfolios();
        });
    };

    return { portfolios, loading, error, addPortfolio, getAllPortfolios, deletePortfolio };
};
