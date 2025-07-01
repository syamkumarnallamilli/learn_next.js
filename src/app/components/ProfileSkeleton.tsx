// ProfileSkeleton.tsx
import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="max-w-sm w-full mx-auto p-4 rounded-lg shadow-md bg-white animate-pulse">
      <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2" />
      <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />
    </div>
  );
};

export default ProfileSkeleton;
