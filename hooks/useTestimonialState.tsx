import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import {
    addTestimonial as setTestimonial,
    addTestimonials,
    setError,
    setLoading,
    TestimonialType,
} from "@/services/store/slices/testimonialSlice";
import { getDocuments } from "@/services/firebase/db/get_documents";
import { addDocument } from "@/services/firebase/db/add_document";

export const useTestimonialState = () => {
    const { error, loading, testimonials } = useAppSelector((state) => state.testimonials);
    const [saving, setSaving] = React.useState(false);

    const dispatch = useAppDispatch();

    // fetch testimonials
    const fetchTestimonials = async () => {
        if (testimonials.length > 0) return;
        dispatch(setLoading(true));
        await getDocuments("testimonials").then((res: TestimonialType[]) => {
            if (res) {
                dispatch(addTestimonials(res));

                dispatch(setError(""));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                dispatch(setError("Something went wrong"));
            }
        });
    };

    // add testimonial
    const addTestimonial = async (testimonial: any) => {
        setSaving(true);
        await addDocument("testimonials", testimonial).then((res: TestimonialType) => {
            if (res && res.id) {
                dispatch(setTestimonial(res));
                setSaving(false);
            } else {
                setSaving(false);
                dispatch(setError("Something went wrong"));
            }
        });
    };

    return { testimonials, loading, error, saving, addTestimonial, fetchTestimonials };
};
