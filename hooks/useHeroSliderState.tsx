import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { setheroSliders, addSlider as setSlider, setLoading, setError } from "@/services/store/slices/heroSliderSlice";
import { getDocuments } from "@/services/firebase/db/get_documents";
import { addDocument } from "@/services/firebase/db/add_document";
import React from "react";

export const useHeroSliderState = () => {
    const { heroSliders, loading, error } = useAppSelector((state) => state.heroSliders);
    const dispatch = useAppDispatch();
    const [saving, setSaving] = React.useState(false);

    // fetch clients
    React.useEffect(() => {
        fetchHeroSlider();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO: fetch clients from the database
    const fetchHeroSlider = async () => {
        if (heroSliders.length > 0) return;
        dispatch(setLoading(true));
        try {
            await getDocuments("sliders").then((res) => {
                if (res) {
                    dispatch(setheroSliders(res));
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
    const addSlider = async (slider: string) => {
        setSaving(true);

        await addDocument("sliders", { image: slider }).then((res) => {
            if (res && res.id) {
                dispatch(setSlider(res));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                dispatch(setError("Something went wrong"));
            }
        });
        setSaving(false);
    };

    return {
        heroSliders,
        loading,
        error,
        saving,
        fetchHeroSlider,
        addSlider,
    };
};
