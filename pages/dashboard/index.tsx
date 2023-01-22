import * as React from "react";
import Button from "@/components/Button/Button";
import { BsGoogle } from "react-icons/bs";
import { signInWithGoogle } from "@/services/firebase/auth/auth_google_signin_popup";
import _ from "lodash";
import { useRouter } from "next/router";
import Loading from "@/components/AppLayout/Loading";
import { useAuthState } from "@/hooks/useAuthState";

export default function Login() {
    const { auth, loading, error, setAuthState } = useAuthState();
    const router = useRouter();

    // handle redirect if user is already logged in
    React.useEffect(() => {
        if (!loading && !_.isEmpty(auth) && auth.accessToken) {
            router.push("/dashboard/portfolio");
        }
    }, [auth, loading, error, router]);

    // handle login with google
    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const user = await signInWithGoogle();
            setAuthState(user);
        } catch (e) {
            console.log(e);
        }
    };

    let content = null;

    if (loading) {
        content = <Loading />;
    } else if (error) {
        content = <div>Error: {error}</div>;
    } else if (_.isEmpty(auth) && !loading) {
        content = (
            <div className="flex items-center justify-center h-screen">
                <div>
                    <Button
                        type="button"
                        aria-describedby="login with google"
                        onClick={handleLogin}
                        className="flex items-center justify-center space-x-3 bg-green-700 hover:bg-green-500 px-5 rounded-md text-green-50"
                    >
                        <BsGoogle />
                        <span>Login With Google</span>
                    </Button>
                </div>
            </div>
        );
    }

    return content;
}
