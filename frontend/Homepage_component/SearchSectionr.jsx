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
    if (parseInt(minPrice) > parseInt(maxPrice)) {
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
      minPrice: parseInt(minPrice),
      maxPrice: parseInt(maxPrice),
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10">
      <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
        {/* Search Tabs */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setActiveTab("flats")}
            className={`flex-1 py-3 text-center font-medium rounded-t-lg ${
              activeTab === "flats"
                ? "bg-orange-600 text-white"
                : "text-gray-600"
            }`}
          >
            Find a Flat
          </button>
          <button
            onClick={() => setActiveTab("flatmates")}
            className={`flex-1 py-3 text-center font-medium rounded-t-lg ${
              activeTab === "flatmates"
                ? "bg-orange-600 text-white"
                : "text-gray-600"
            }`}
          >
            Find Flatmates
          </button>
        </div>

        {/* Search Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                placeholder="City, neighborhood, or address"
                className={`w-full px-4 py-2 border ${
                  errors.location ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                required
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="minPrice"
                value={searchParams.minPrice}
                onChange={handleInputChange}
                placeholder="1000"
                min="0"
                className={`w-full px-4 py-2 border ${
                  errors.minPrice ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                required
              />
              {errors.minPrice && (
                <p className="text-red-500 text-xs mt-1">{errors.minPrice}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="maxPrice"
                value={searchParams.maxPrice}
                onChange={handleInputChange}
                placeholder="5000"
                min="0"
                className={`w-full px-4 py-2 border ${
                  errors.maxPrice ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
                required
              />
              {errors.maxPrice && (
                <p className="text-red-500 text-xs mt-1">{errors.maxPrice}</p>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors text-lg font-medium"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
