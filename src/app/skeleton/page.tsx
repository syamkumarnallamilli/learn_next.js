'use client'
import React, { useEffect, useState } from "react";
import ProfileSkeleton from "../components/ProfileSkeleton";
 

const App = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setProfile({ name: "John Doe", email: "john@example.com" });
    }, 2000); // simulate API delay
  }, []);

  return (
    <div className="p-4">
      {profile ? (
        <div className="max-w-sm w-full mx-auto p-4 rounded-lg shadow-md bg-white text-center">
          <img
            src="/next.svg"
            alt="avatar"
            className="h-24 w-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      ) : (
        <ProfileSkeleton />
      )}
    </div>
  );
};

export default App;
