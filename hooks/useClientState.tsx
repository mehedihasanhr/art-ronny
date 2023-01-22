import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { setClients, addClient as setClient, setLoading, setError } from "@/services/store/slices/clientSlice";
import { getDocuments } from "@/services/firebase/db/get_documents";
import { addDocument } from "@/services/firebase/db/add_document";
import React from "react";

export const useClientState = () => {
    const { clients, loading, error } = useAppSelector((state) => state.clients);
    const dispatch = useAppDispatch();
    const [saving, setSaving] = React.useState(false);

    // fetch clients
    React.useEffect(() => {
        fetchClients();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO: fetch clients from the database
    const fetchClients = async () => {
        if (clients.length > 0) return;
        dispatch(setLoading(true));
        try {
            await getDocuments("clients").then((res) => {
                if (res) {
                    dispatch(setClients(res));
                    dispatch(setLoading(false));
                } else {
                    dispatch(setLoading(false));
                    dispatch(setError("Something went wrong"));
                }
            });
        } catch (error: any) {
            dispatch(setError(error.message));
        }
        dispatch(setLoading(false));
    };

    // TODO: add new client to the list
    const addClient = async (client: string) => {
        setSaving(true);

        await addDocument("clients", { image: client }).then((res) => {
            if (res && res.id) {
                dispatch(setClient(res));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                dispatch(setError("Something went wrong"));
            }
        });
        setSaving(false);
    };

    return {
        clients,
        loading,
        error,
        fetchClients,
        addClient,
        saving,
    };
};
