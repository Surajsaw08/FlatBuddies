import React, { useEffect, useState } from "react";
import Footer from "../LnadingPage_components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState({
    phone: "",
    gender: "",
    age: "",
  });
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
  });
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [showFlatmateForm, setShowFlatmateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Property form data state
  const [propertyFormData, setPropertyFormData] = useState({
    title: "",
    description: "",
    city: "",
    address: "",
    rent: "",
    availableFrom: "",
    roommates: "",
    preferredGender: "",
    isAvailable: true,
  });

  const [flatMateFormData, setFaltMateFormData] = useState({
    city: "",
    budgetMin: "",
    budgetMax: "",
    preferredGender: "",
    moveInDate: "",
    occupation: "",
    habits: "",
    description: "",
    ageMin: "",
    ageMax: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handlenavigatehomepage = () => {
    navigate("/homepage");
  };

  const fetchUserData = async (token) => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/userdata", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Access data from the nested response
      const userData = res.data.data;

      setUserDetails({
        username: userData.username || "",
        email: userData.email || "",
      });
      setUser({
        phone: userData.phone || "",
        gender: userData.gender || "",
        age: userData.age || "",
      });
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      // Only send the changeable fields
      await axios.put("http://localhost:3000/api/user/userdata/update", user, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleListProperty = () => {
    setShowPropertyForm(true);
  };

  const handleListRoomMate = () => {
    setShowFlatmateForm(true);
  };

  // Property form handlers
  const handlePropertyInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPropertyFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFlatmateInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFaltMateFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const handlePropertySubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       alert("Please log in to submit property details.");
  //       return;
  //     }

  //     const response = await axios.post(
  //       "http://localhost:3000/api/user/registerflat",
  //       propertyFormData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log("Property submitted successfully:", response.data);
  //     alert("Flat registered successfully!");
  //     setShowPropertyForm(false);
  //   } catch (error) {
  //     console.error(
  //       "Error submitting property:",
  //       error.response?.data || error.message
  //     );
  //     alert("Failed to register the flat. Please try again.");
  //   }
  // };

  const handlePropertySubmit = async (e) => {
    console.log("Submitting property form"); // Add this
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to submit property details.");
        return;
      }

      console.log("Making API call"); // Add this
      const response = await axios.post(
        "http://localhost:3000/api/user/registerflat",
        propertyFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Property submitted successfully:", response.data);
      alert("Flat registered successfully!");
      setShowPropertyForm(false);
    } catch (error) {
      console.error(
        "Error submitting property:",
        error.response?.data || error.message
      );
      alert("Failed to register the flat. Please try again.");
    }
  };

  const handleFlatmateSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first to register as a flatmate.");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/user/registerflatMate",
        flatMateFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registered successfully", response.data);
      alert("Successfully registered as a flatmate!");
      setShowFlatmateForm(false);
    } catch (error) {
      console.error(
        "Error submitting flatmate data:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.message ||
          "Failed to register as flatmate. Please try again."
      );
    }
  };

  const OptionCard = ({
    icon,
    title,
    description,
    features,
    buttonText,
    onClick,
  }) => {
    return (
      <div
        className="option-card bg-white rounded-xl shadow-md p-8 border-2 border-transparent transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
        onClick={onClick}
      >
        <div className="flex items-start mb-6">
          <div className="icon-circle w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
            {icon}
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors w-full font-medium">
          {buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div
              className="text-2xl font-bold text-orange-600 flex items-center"
              onClick={handlenavigatehomepage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              FlatBuddies
            </div>
            <div className="hidden md:flex space-x-8 ml-10">
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors"
                onClick={handlenavigatehomepage}
              >
                Home
              </a>
              <a href="#" className="text-orange-600 font-medium">
                Profile
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                your property
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Flatmate post
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full bg-white p-1 mb-6 md:mb-0 md:mr-8">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            {/* User Details */}
            <div className="pt-5">
              <h1 className="text-3xl font-bold mb-2">
                {userDetails.username || "No username"}
              </h1>
              <p className="text-xl opacity-90 mb-4">
                {userDetails.email || "No email"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content - Only editable fields */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Profile Information</h2>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={user.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    min="1"
                    placeholder="Enter age"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p className="mt-1 text-lg">{user.phone || "Not provided"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                <p className="mt-1 text-lg">{user.gender || "Not specified"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Age</h3>
                <p className="mt-1 text-lg">{user.age || "Not specified"}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            What would you like to do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rent a Room Option */}
            <OptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
              title="Rent a Room"
              description="List your property and find the perfect tenants. Set your own terms and requirements."
              features={[
                "Create detailed property listings",
                "Screen potential flatmates",
                "Manage your property listings",
              ]}
              buttonText="List Your Property"
              onClick={handleListProperty}
            />

            {/* Register as Flatmate Option */}
            <OptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
              title="Register as Flatmate"
              description="Create your profile and find the perfect flat to share with others."
              features={[
                "Create your flatmate profile",
                "Specify your preferences",
                "Get matched with compatible flats",
              ]}
              buttonText="Create Flatmate Profile"
              onClick={handleListRoomMate}
            />
          </div>
        </div>
      </div>

      {/* Property Listing Modal */}
      {showPropertyForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gray-500 bg-opacity-50">
            <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
              <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      List Your Property
                    </h2>
                    <button
                      onClick={() => setShowPropertyForm(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Fill in the details below to list your property on
                    FlatBuddies.
                  </p>

                  <form onSubmit={handlePropertySubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={propertyFormData.title}
                        onChange={handlePropertyInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g. Modern 2-Bedroom Apartment in Camden"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows="4"
                        value={propertyFormData.description}
                        onChange={handlePropertyInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="describe quality with comma like furnished,balconey ,etc"
                      ></textarea>
                    </div>

                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={propertyFormData.city}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. London"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={propertyFormData.address}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 123 High Street"
                        />
                      </div>
                    </div>

                    {/* Rent and Availability */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="rent"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Monthly Rent (₹)
                        </label>
                        <input
                          type="number"
                          id="rent"
                          name="rent"
                          value={propertyFormData.rent}
                          onChange={handlePropertyInputChange}
                          required
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 1200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="availableFrom"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Available From
                        </label>
                        <input
                          type="date"
                          id="availableFrom"
                          name="availableFrom"
                          value={propertyFormData.availableFrom}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    {/* Roommates and Gender Preference */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="roommates"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Number of Roommates
                        </label>
                        <input
                          type="number"
                          id="roommates"
                          name="roommates"
                          value={propertyFormData.roommates}
                          onChange={handlePropertyInputChange}
                          required
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="preferredGender"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Preferred Gender
                        </label>
                        <select
                          id="preferredGender"
                          name="preferredGender"
                          value={propertyFormData.preferredGender}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Select preference</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="ANY">Any</option>
                        </select>
                      </div>
                    </div>

                    {/* Availability Status */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isAvailable"
                        name="isAvailable"
                        checked={propertyFormData.isAvailable}
                        onChange={handlePropertyInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="isAvailable"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Property is currently available
                      </label>
                    </div>

                    {/* Upload Photos Section */}
                    {/* <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                      onClick={triggerFileInput}
                    >
                      <input
                        type="file"
                        id="property-file-upload"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handlePropertyFileUpload}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">
                        Drag and drop photos here, or
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-500 ml-1"
                        >
                          browse
                        </button>
                        to upload
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                      {propertyFormData.photos.length > 0 && (
                        <p className="mt-2 text-sm text-indigo-600">
                          {propertyFormData.photos.length}{" "}
                          {propertyFormData.photos.length === 1
                            ? "file"
                            : "files"}{" "}
                          selected
                        </p>
                      )}
                    </div> */}

                    {/* Submit Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowPropertyForm(false)}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        disabled={isSubmitting}
                      >
                        List Property
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showFlatmateForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gray-500 bg-opacity-50">
            <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
              <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      List as a Flatmate
                    </h2>
                    <button
                      onClick={() => setShowFlatmateForm(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Fill in the details below to register you on FlatBuddies.
                  </p>

                  <form onSubmit={handleFlatmateSubmit} className="space-y-6">
                    {/* Occupation */}
                    <div>
                      <label
                        htmlFor="occupation"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Occupation
                      </label>
                      <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        value={flatMateFormData.occupation}
                        onChange={handleFlatmateInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g. Student, Doctor"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows="4"
                        value={flatMateFormData.description}
                        onChange={handleFlatmateInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Describe yourself"
                      ></textarea>
                    </div>

                    {/* Location and Habits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={flatMateFormData.city}
                          onChange={handleFlatmateInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. Bhopal"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="habits"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Habits
                        </label>
                        <input
                          type="text"
                          id="habits"
                          name="habits"
                          value={flatMateFormData.habits}
                          onChange={handleFlatmateInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. smoking, drinking"
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="budgetMin"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Budget Min (₹)
                        </label>
                        <input
                          type="number"
                          id="budgetMin"
                          name="budgetMin"
                          value={flatMateFormData.budgetMin}
                          onChange={handleFlatmateInputChange}
                          required
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 5000"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="budgetMax"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Budget Max (₹)
                        </label>
                        <input
                          type="number"
                          id="budgetMax"
                          name="budgetMax"
                          value={flatMateFormData.budgetMax}
                          onChange={handleFlatmateInputChange}
                          required
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 10000"
                        />
                      </div>
                    </div>

                    {/* Age Range */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="ageMin"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Age Min
                        </label>
                        <input
                          type="number"
                          id="ageMin"
                          name="ageMin"
                          value={flatMateFormData.ageMin}
                          onChange={handleFlatmateInputChange}
                          required
                          min="18"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 24"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="ageMax"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Age Max
                        </label>
                        <input
                          type="number"
                          id="ageMax"
                          name="ageMax"
                          value={flatMateFormData.ageMax}
                          onChange={handleFlatmateInputChange}
                          required
                          min="18"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 30"
                        />
                      </div>
                    </div>

                    {/* Move-in Date and Gender Preference */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="moveInDate"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Move In Date
                        </label>
                        <input
                          type="date"
                          id="moveInDate"
                          name="moveInDate"
                          value={flatMateFormData.moveInDate}
                          onChange={handleFlatmateInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="preferredGender"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Preferred Gender
                        </label>
                        <select
                          id="preferredGender"
                          name="preferredGender"
                          value={flatMateFormData.preferredGender}
                          onChange={handleFlatmateInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Select preference</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="ANY">Any</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowFlatmateForm(false)}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProfilePage;
