
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {useSession, authClient } from "../../../lib/auth-client";



const UpdateProfilePage = () => {
  const router = useRouter();

  const { data: session, isPending } = useSession();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      router.push("/profile");
      router.refresh();
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
        Update Information
      </h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your new name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {message && <p>{message}</p>}

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </main>
  );
};

export default UpdateProfilePage;
