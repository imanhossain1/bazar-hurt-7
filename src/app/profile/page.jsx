
"use client";

import Link from "next/link";
import { authClient } from "../../lib/auth-client";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return (
      <p className="text-center mt-10">
        Please sign in first.
      </p>
    );
  }

  return (
    <main className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-6">
        My Profile
      </h1>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">Name:</span>{" "}
          {session.user.name}
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          {session.user.email}
        </p>
      </div>

      <Link
        href="/profile/update"
        className="btn btn-primary w-full mt-6"
      >
        Update Information
      </Link>
    </main>
  );
};

export default ProfilePage;
