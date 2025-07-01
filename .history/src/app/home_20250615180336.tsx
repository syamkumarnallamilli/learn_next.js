
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [user] = useState({
    name: "Dianne Russel",
    id: "JRID2674",
    image: "", // Leave empty to show initial fallback
    qualification: "Trained",
    experience: "12 Years",
    profileUrl: "https://example.com/dianne",
  });

  const getInitial = (name) => name?.charAt(0).toUpperCase();

  return (
    <>
      <Head>
        <title>Profile Card</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="flex bg-white p-6 rounded-xl shadow-md items-center gap-8 w-full max-w-5xl">
          {/* Profile Picture or Fallback */}
          <div className="flex-shrink-0">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-xl object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-300 rounded-xl flex items-center justify-center text-4xl font-bold text-white">
                {getInitial(user.name)}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="flex flex-col w-full gap-4">
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <span className="bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-600">
                {user.id}
              </span>
            </div>

            {/* Icons Row */}
            <div className="flex items-center gap-6">
              {["email", "call", "person", "location_on"].map((icon, i) => (
                <button key={i} className="bg-gray-100 rounded-full p-2">
                  <span className="material-icons text-gray-600">{icon}</span>
                </button>
              ))}
            </div>

            {/* Verified Row */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">
                Verified:
              </label>
              <div className="relative">
                <button className="bg-green-100 text-green-800 px-4 py-1 rounded-md text-sm font-medium flex items-center gap-1">
                  Verified
                  <span className="material-icons text-sm">expand_more</span>
                </button>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div>
                <p className="text-sm text-gray-500">Qualification</p>
                <p className="font-semibold text-gray-800">
                  {user.qualification}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold text-gray-800">
                  {user.experience}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Profile Link</p>
                <a
                  href={user.profileUrl}
                  className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.name}
                  <span className="material-icons text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
