import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { getDocuments } from "@/services/firebase/db/get_documents";
import { addDocument } from "@/services/firebase/db/add_document";

import {
    addServices,
    addService as setService,
    setLoading,
    setError,
    ServiceType,
} from "@/services/store/slices/serviceSlice";
import { useRouter } from "next/router";

export const useServicesState = () => {
    const { services, loading, error } = useAppSelector((state) => state.services);
    const dispatch = useAppDispatch();
    const [saving, setSaving] = React.useState(false);

    const setAllServices = async () => {
        if (services.length > 0) return;

        // dispatch(setLoading(true));

        await getDocuments("services").then((res: ServiceType[]) => {
            if (res) {
                dispatch(addServices(res));

                dispatch(setError(""));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                dispatch(setError("Something went wrong"));
            }
        });
    };

    // add a new service to db
    const addService = async (service: any) => {
        setSaving(true);

        await addDocument("services", service).then((res: ServiceType) => {
            if (res && res.id) {
                dispatch(setService(res));
                setSaving(false);
            } else {
                setSaving(false);
                dispatch(setError("Something went wrong"));
            }
        });
    };

    return { services, loading, error, setAllServices, addService, saving };
};
