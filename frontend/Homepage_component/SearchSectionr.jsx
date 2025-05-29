"use client";

import { useState } from "react";

const SearchSection = ({ activeTab, setActiveTab, onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSearch = () => {
    const { location, minPrice, maxPrice } = searchParams;
    const newErrors = {};

    // Validate all fields are filled
    if (!location) newErrors.location = "Location is required";
    if (!minPrice) newErrors.minPrice = "Min price is required";
    if (!maxPrice) newErrors.maxPrice = "Max price is required";

    // If any errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Validate minPrice is less than maxPrice
    if (Number.parseInt(minPrice) > Number.parseInt(maxPrice)) {
      newErrors.minPrice = "Min price cannot be greater than max price";
      newErrors.maxPrice = "Max price cannot be less than min price";
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Call parent's onSearch with the search parameters
    onSearch({
      location,
      minPrice: Number.parseInt(minPrice),
      maxPrice: Number.parseInt(maxPrice),
    });
  };

  return (
    <div className="max-w-8xl mx-auto px-4 -mt-10">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl  border-0 overflow-hidden">
        {/* Search Tabs */}
        <div className="flex bg-gray-50 p-1 rounded-t-2xl">
          <button
            onClick={() => setActiveTab("flats")}
            className={`flex-1 py-4 text-center font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "flats"
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-[0.98]"
                : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 21l0-12"
              />
            </svg>
            Find a Flat
          </button>
          <button
            onClick={() => setActiveTab("flatmates")}
            className={`flex-1 py-4 text-center font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "flatmates"
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-[0.98]"
                : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            Find Flatmates
          </button>
        </div>

        {/* Search Form */}
        <div className="p-8 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeTab === "flats"
                ? "Find Your Perfect Flat"
                : "Find Your Ideal Flatmates"}
            </h2>
            <p className="text-gray-600">
              {activeTab === "flats"
                ? "Discover amazing places to call home"
                : "Connect with like-minded people to share your space"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  placeholder="City, neighborhood, or address"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 ${
                    errors.location
                      ? "border-red-500 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 hover:border-gray-300 focus:bg-white"
                  } focus:ring-4 focus:ring-orange-100 focus:outline-none`}
                  required
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              {errors.location && (
                <p className="text-red-500 text-sm flex items-center gap-2 mt-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.location}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-orange-500 font-bold text-base">₹</span>
                Min Price <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="minPrice"
                  value={searchParams.minPrice}
                  onChange={handleInputChange}
                  placeholder="₹10,000"
                  min="0"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 ${
                    errors.minPrice
                      ? "border-red-500 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 hover:border-gray-300 focus:bg-white"
                  } focus:ring-4 focus:ring-orange-100 focus:outline-none`}
                  required
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold text-lg">
                  ₹
                </span>
              </div>
              {errors.minPrice && (
                <p className="text-red-500 text-sm flex items-center gap-2 mt-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.minPrice}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-orange-500 font-bold text-base">₹</span>
                Max Price <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="maxPrice"
                  value={searchParams.maxPrice}
                  onChange={handleInputChange}
                  placeholder="₹50,000"
                  min="0"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 ${
                    errors.maxPrice
                      ? "border-red-500 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 hover:border-gray-300 focus:bg-white"
                  } focus:ring-4 focus:ring-orange-100 focus:outline-none`}
                  required
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold text-lg">
                  ₹
                </span>
              </div>
              {errors.maxPrice && (
                <p className="text-red-500 text-sm flex items-center gap-2 mt-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.maxPrice}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search {activeTab === "flats" ? "Flats" : "Flatmates"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
