import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { setExperiences, setLoading, setError } from "@/services/store/slices/experienceSlice";

import { getDocuments } from "@/services/firebase/db/get_documents";
import { addDocument } from "@/services/firebase/db/add_document";
import { deleteDocument } from "@/services/firebase/db/delete_document";
import { updateDocument } from "@/services/firebase/db/update_document";

export const useExperienceState = () => {
    const { experiences, loading, error } = useAppSelector((state) => state.experiences);
    const dispatch = useAppDispatch();
    const [saving, setSaving] = React.useState(false);

    // INITIALIZES EXPERIENCE STATE
    React.useEffect(() => {
        fetchExperiences();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // FATCH EXPERIENCES DATA FROM DATABASE
    const fetchExperiences = React.useCallback(async () => {
        if (experiences.length > 0) return;
        dispatch(setLoading(true));
        try {
            const data = await getDocuments("experiences");
            dispatch(setExperiences(data));
        } catch (error: any) {
            dispatch(setError(error));
        }
        dispatch(setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    // ADD EXPERIENCE TO DATABASE
    const addExperienceToDB = React.useCallback(
        async (expreience: any) => {
            setSaving(true);
            try {
                await addDocument("experiences", expreience);
                fetchExperiences();
            } catch (error: any) {
                dispatch(setError(error));
            }
            setSaving(false);
        },
        [dispatch, fetchExperiences],
    );

    // REMOVE EXPERIENCE FROM DATABASE
    const removeExperienceFromDB = React.useCallback(
        async (id: string) => {
            dispatch(setLoading(true));
            try {
                await deleteDocument("experiences", id);
                fetchExperiences();
            } catch (error: any) {
                dispatch(setError(error));
            }
            dispatch(setLoading(false));
        },
        [dispatch, fetchExperiences],
    );

    // UPDATE EXPERIENCE IN DATABASE
    const updateExperienceInDB = React.useCallback(
        async (id: string, expreience: any) => {
            dispatch(setLoading(true));
            try {
                await updateDocument("experiences", id, expreience);
                fetchExperiences();
            } catch (error: any) {
                dispatch(setError(error));
            }
            dispatch(setLoading(false));
        },
        [dispatch, fetchExperiences],
    );

    return { experiences, loading, error, addExperienceToDB, removeExperienceFromDB, updateExperienceInDB, saving };
};
