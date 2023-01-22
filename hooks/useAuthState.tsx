import { useAppSelector, useAppDispatch } from "@/services/store/hooks";
import { setAuth } from "@/services/store/slices/AuthSlice";
import { authSignOut } from "@/services/firebase/auth/auth_sign_out";

export const useAuthState = () => {
    const { auth, error, loading } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const setAuthState = (user: any) => {
        dispatch(
            setAuth({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
                phoneNumber: user.phoneNumber,
                isAnonymous: user.isAnonymous,
                accessToken: user.stsTokenManager.accessToken,
            }),
        );
    };

    const setAuthLogoutState = () => {
        authSignOut(() => dispatch(setAuth(null)));
    };

    return { auth, error, loading, setAuthState, setAuthLogoutState };
};
