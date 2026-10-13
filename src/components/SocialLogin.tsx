"use client";

// import {signIn} from "../../lib/auth-client";
import {signIn  } from "../lib/auth-client";

function SocialLogin() {
    const handleGoogleLogin = async () => {
        await signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    const handleGithubLogin = async() => {
         await signIn.social({
            provider: "github",
            callbackURL: "/",
        });
    };

    return (
        <div className="mt-4">
            <div className="divider text-sm text-gray-500">অথবা Continue with</div>

            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn btn-outline flex-1 rounded-xl border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                >
                    <span className="text-lg font-bold text-blue-600">G</span>
                    Google
                </button>

                <button
                    type="button"
                    onClick={handleGithubLogin}
                    className="btn btn-outline flex-1 rounded-xl border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                >
                    <span className="text-lg">⌘</span>
                    GitHub
                </button>
            </div>
        </div>
    );
}

export default SocialLogin;
