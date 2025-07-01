import {
  Mail,
  Phone,
  User,
  MapPin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const user = {
    name: "Dianne Russel",
    id: "JRID2674",
    image: "", // fallback to initial
    qualification: "Trained",
    experience: "12 Years",
    profileUrl: "https://example.com/dianne",
    isVerified: true,
  };

  const getInitial = (name) => name?.charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex bg-white p-6 rounded-xl shadow-md items-center gap-8 w-full max-w-5xl">
        {/* Profile Picture */}
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

        {/* Info Block */}
        <div className="flex flex-col w-full gap-4">
          {/* Name + ID */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <span className="bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-600">
              {user.id}
            </span>
          </div>

          {/* Icon Buttons */}
          <div className="flex items-center gap-6">
            <IconBtn icon={<Mail className="w-5 h-5" />} />
            <IconBtn icon={<Phone className="w-5 h-5" />} />
            <IconBtn icon={<User className="w-5 h-5" />} />
            <IconBtn icon={<MapPin className="w-5 h-5" />} />
          </div>

          {/* Verified Section */}
          <div className="flex items-center gap-4">
            
            <div className="bg-green-100 text-green-800 px-4 py-1 rounded-md text-sm font-medium flex items-center gap-1">
              Verified <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Vertical Line Separated Grid */}
          <div className="flex mt-2  pt-4">
            {/* Qualification */}
            <div className="px-4 first:pl-0">
              <p className="text-sm text-gray-500">Qualification</p>
              <p className="font-semibold text-gray-800">{user.qualification}</p>
            </div>

            {/* Experience */}
            <div className="px-4">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-semibold text-gray-800">{user.experience}</p>
            </div>

            {/* Profile Link */}
            <div className="px-4 last:pr-0">
              <p className="text-sm text-gray-500">Profile Link</p>
              <a
                href={user.profileUrl}
                className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                {user.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Reusable Icon Button
const IconBtn = ({ icon }) => (
  <button className="bg-gray-100 rounded-full p-2 text-gray-600">
    {icon}
  </button>
);
