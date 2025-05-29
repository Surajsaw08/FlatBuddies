import { useState } from "react";

const UserResultsSection = ({ activeTab, results = [], loading, onDelete }) => {
  const safeResults = Array.isArray(results) ? results : [];

  const gradients = [
    "from-blue-500 to-purple-500",
    "from-green-500 to-teal-500",
    "from-yellow-500 to-red-500",
    "from-pink-500 to-rose-500",
    "from-indigo-500 to-blue-500",
  ];

  const badges = [
    { text: "Verified", color: "text-green-500" },
    { text: "Premium", color: "text-orange-500" },
    { text: "New", color: "text-blue-500" },
    { text: "Popular", color: "text-purple-500" },
  ];

  const getRandomGradient = (index) => gradients[index % gradients.length];
  const getRandomBadge = (index) => badges[index % badges.length];

  const flatTags = ["Furnished", "WiFi", "Parking", "AC", "Kitchen"];
  const flatmateTags = [
    "Professional",
    "Clean",
    "Non-smoker",
    "Organized",
    "Friendly",
  ];

  if (loading) {
    return (
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Loading {activeTab === "flats" ? "Flats" : "Flatmates"}...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full -mr-40 -mt-40 opacity-30 blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100 rounded-full -ml-20 -mb-20 opacity-30 blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your {activeTab === "flats" ? "Listed Flats" : "Flatmate Posts"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {activeTab === "flats"
              ? "Manage your listed flats"
              : "Manage your flatmate posts"}
          </p>
        </div>

        {safeResults.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No {activeTab === "flats" ? "flats" : "flatmate posts"} found
            </h3>
            <p className="text-gray-500 mt-2">
              You haven't posted any{" "}
              {activeTab === "flats" ? "flats" : "flatmate posts"} yet
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeResults.map((item, index) =>
              activeTab === "flats" ? (
                <FlatCard
                  key={item.id || index}
                  flat={item}
                  gradient={getRandomGradient(index)}
                  badge={getRandomBadge(index)}
                  tags={flatTags}
                  onDelete={() => onDelete(item.id, "flat")}
                />
              ) : (
                <FlatmateCard
                  key={item.id || index}
                  flatmate={item}
                  gradient={getRandomGradient(index)}
                  badge={getRandomBadge(index)}
                  tags={flatmateTags}
                  onDelete={() => onDelete(item.id, "flatmate")}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const FlatCard = ({ flat, gradient, badge, onDelete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const descriptionTags = flat.description
    ? flat.description
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item)
    : [];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this flat listing?")) {
      return;
    }

    try {
      setIsLoading(true);
      await onDelete();
    } catch (error) {
      console.error("Error deleting flat:", error);
      alert("Failed to delete flat. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover transform transition-transform duration-300 hover:-translate-y-2">
      <div className={`h-48 bg-gradient-to-r ${gradient} relative`}>
        {flat.verified && (
          <div
            className={`absolute top-4 left-4 bg-white ${badge.color} px-3 py-1 rounded-full text-sm font-medium`}
          >
            {badge.text}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">
          {flat.title || "Available Flat"}
        </h3>
        <p className="text-gray-500 text-sm mb-4 flex items-center">
          <LocationIcon />
          {flat.city}, {flat.address}
        </p>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Rent</p>
            <p className="font-semibold">₹{flat.rent}/month</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Available</p>
            <p className="font-semibold">
              {flat.availableFrom ? formatDate(flat.availableFrom) : "Now"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {descriptionTags.slice(0, 4).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {flat.roommates && (
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
              {flat.roommates} Roommates
            </span>
          )}
        </div>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className={`w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Deleting..." : "Remove Listing"}
        </button>
      </div>
    </div>
  );
};

const FlatmateCard = ({ flatmate, gradient, badge, onDelete }) => {
  const [isLoading, setIsLoading] = useState(false);

  const habitTags = flatmate.habits
    ? flatmate.habits
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item)
    : [];

  const handleDelete = async () => {
    if (
      !window.confirm("Are you sure you want to delete this flatmate post?")
    ) {
      return;
    }

    try {
      setIsLoading(true);
      await onDelete();
    } catch (error) {
      console.error("Error deleting flatmate post:", error);
      alert("Failed to delete flatmate post. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover transform transition-transform duration-300 hover:-translate-y-2">
      <div className={`h-48 bg-gradient-to-r ${gradient} relative`}>
        {flatmate.verified && (
          <div
            className={`absolute top-4 left-4 bg-white ${badge.color} px-3 py-1 rounded-full text-sm font-medium`}
          >
            {badge.text}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">
          Looking for flatmate, {flatmate.ageMin}-{flatmate.ageMax} years
        </h3>
        <p className="text-gray-500 text-sm mb-1">
          {flatmate.occupation || "Professional"}
        </p>
        <p className="text-gray-500 text-sm mb-4 flex items-center">
          <LocationIcon />
          {flatmate.city}
        </p>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Budget</p>
            <p className="font-semibold">
              ₹{flatmate.budgetMin}-{flatmate.budgetMax}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-semibold">{flatmate.preferredGender || "Any"}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {habitTags.slice(0, 4).map((habit, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full"
            >
              {habit}
            </span>
          ))}
        </div>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className={`w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Deleting..." : "Remove Post"}
        </button>
      </div>
    </div>
  );
};

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

export default UserResultsSection;
