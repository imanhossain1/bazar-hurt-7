"use client";

import { useEffect, useState } from "react";

function Loading() {
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((previousProgress) => {
                if (previousProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return previousProgress + 1;
            });
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4">
            {/* Spinner */}
            <div className="loading loading-spinner loading-lg text-primary scale-150"></div>

            {/* Loading Text */}
            <div className="text-center">
                <h2 className="text-xl font-bold text-base-content">
                    বাজারদরের তথ্য লোড হচ্ছে
                </h2>

                <p className="mt-2 text-sm text-base-content/60">
                    অনুগ্রহ করে অপেক্ষা করুন...
                </p>
            </div>

            {/* Progress Percentage */}
            <div className="w-full max-w-xs">
                <div className="mb-2 flex justify-between text-sm font-semibold">
                    <span>Loading</span>
                    <span className="text-primary">
                        {progress.toLocaleString("bn-BD")}%
                    </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-base-300">
                    <div
                        className="h-full rounded-full bg-primary transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </main>
    );
}

export default Loading;