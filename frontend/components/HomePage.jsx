// import React from "react";
// import HNavbar from "../Homepage_component/HNavbar";
// import SearchSection from "../Homepage_component/SearchSectionr";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import ResultsSection from "../Homepage_component/ResultSection";
// import FAQ from "../LnadingPage_components/Faqs";
// import Testimonials from "../LnadingPage_components/Testimonial";
// import IndianCulture from "../LnadingPage_components/IndianCultures";
// import Footer from "../LnadingPage_components/Footer";

// const HomePage = () => {
//   const [activeTab, setActiveTab] = useState("flats");
//   const [searchResults, setSearchResults] = useState([]);
//   const [flats, setFlats] = useState([]);
//   const [flatmates, setFlatmates] = useState([]);
//   const [filterFlats, setFilterFlats] = useState([]);
//   const [filterFlatmates, setFilterFlatmates] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState({
//     flats: true,
//     flatmates: true,
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       fetchUserData(token);
//     }

//     fetchFlats();
//     fetchFlatmates();
//   }, []);

//   const fetchUserData = async (token) => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/user/userdata", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUser(res.data);
//     } catch (err) {
//       console.error("Failed to fetch user", err);
//     }
//   };

//   const fetchFlats = async () => {
//     try {
//       setLoading((prev) => ({ ...prev, flats: true }));
//       const response = await axios.get(
//         "http://localhost:3000/api/user/getFlats"
//       );
//       setFlats(response.data.data || []);
//     } catch (error) {
//       console.error("Error fetching flats:", error);
//       setFlats([]);
//     } finally {
//       setLoading((prev) => ({ ...prev, flats: false }));
//     }
//   };

//   const fetchFlatmates = async () => {
//     try {
//       setLoading((prev) => ({ ...prev, flatmates: true }));
//       const response = await axios.get(
//         "http://localhost:3000/api/user/getFlatmates"
//       );
//       setFlatmates(response.data.data || []);
//     } catch (error) {
//       console.error("Error fetching flatmates:", error);
//       setFlatmates([]);
//     } finally {
//       setLoading((prev) => ({ ...prev, flatmates: false }));
//     }
//   };

//   const fetchFilterFlats = async (location, minPrice, maxPrice) => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3000/api/user/getFlats/search",
//         {
//           params: { location, minPrice, maxPrice },
//         }
//       );
//       return response.data.data || [];
//     } catch (error) {
//       console.error("Error fetching flats:", error);
//       return [];
//     }
//   };

//   const fetchFilterFlatMates = async (location, minPrice, maxPrice) => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3000/api/user/getFlatmates/search",
//         {
//           params: { location, minPrice, maxPrice },
//         }
//       );
//       return response.data.data || [];
//     } catch (error) {
//       console.error("Error fetching flatmates:", error);
//       return [];
//     }
//   };

//   // const handleSearch = async (searchParams) => {
//   //   const { location, minPrice, maxPrice } = searchParams;

//   //   if (activeTab === "flats") {
//   //     const flatsData = await fetchFilterFlats(location, minPrice, maxPrice);
//   //     setFilterFlats(flatsData);
//   //     setSearchResults(flatsData);
//   //   } else {
//   //     const flatmatesData = await fetchFilterFlatMates(
//   //       location,
//   //       minPrice,
//   //       maxPrice
//   //     );
//   //     setFilterFlatmates(flatmatesData);
//   //     setSearchResults(flatmatesData);
//   //   }
//   // };

//   const handleSearch = async (searchParams) => {
//     const { location, minPrice, maxPrice } = searchParams;

//     try {
//       if (activeTab === "flats") {
//         const flatsData = await fetchFilterFlats(location, minPrice, maxPrice);
//         setFilterFlats(flatsData);
//         setSearchResults(flatsData); // This will be [] when no results
//       } else {
//         const flatmatesData = await fetchFilterFlatMates(
//           location,
//           minPrice,
//           maxPrice
//         );
//         setFilterFlatmates(flatmatesData);
//         setSearchResults(flatmatesData); // This will be [] when no results
//       }
//     } catch (error) {
//       console.error("Error during search:", error);
//       setSearchResults([]);
//     }
//   };

//   return (
//     <>
//       <HNavbar user={user} />
//       <div className="bg-gradient-to-r from-orange-300 to-red-400 text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Find Your Perfect Home & Flatmates
//             </h1>
//             <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
//               Connect with like-minded people and discover your ideal living
//               situation with FlatBuddies.
//             </p>
//           </div>
//         </div>
//       </div>
//       <SearchSection
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         onSearch={handleSearch}
//       />
//       {/* <ResultsSection
//         activeTab={activeTab}
//         results={
//           searchResults.length
//             ? searchResults
//             : activeTab === "flats"
//             ? flats
//             : flatmates
//         }
//         loading={activeTab === "flats" ? loading.flats : loading.flatmates}
//       /> */}
//       <ResultsSection
//         activeTab={activeTab}
//         results={searchResults} // Always show searchResults when searching
//         loading={activeTab === "flats" ? loading.flats : loading.flatmates}
//       />
//       <Testimonials />
//       <FAQ />
//       <IndianCulture />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;

import React from "react";
import HNavbar from "../Homepage_component/HNavbar";
import SearchSection from "../Homepage_component/SearchSectionr";
import axios from "axios";
import { useState, useEffect } from "react";
import ResultsSection from "../Homepage_component/ResultSection";
import FAQ from "../LnadingPage_components/Faqs";
import Testimonials from "../LnadingPage_components/Testimonial";
import IndianCulture from "../LnadingPage_components/IndianCultures";
import Footer from "../LnadingPage_components/Footer";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("flats");
  const [searchResults, setSearchResults] = useState(null); // Changed to null initially
  const [flats, setFlats] = useState([]);
  const [flatmates, setFlatmates] = useState([]);
  const [filterFlats, setFilterFlats] = useState([]);
  const [filterFlatmates, setFilterFlatmates] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState({
    flats: true,
    flatmates: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }

    fetchFlats();
    fetchFlatmates();
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/userdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  const fetchFlats = async () => {
    try {
      setLoading((prev) => ({ ...prev, flats: true }));
      const response = await axios.get(
        "http://localhost:3000/api/user/getFlats"
      );
      setFlats(response.data.data || []);
    } catch (error) {
      console.error("Error fetching flats:", error);
      setFlats([]);
    } finally {
      setLoading((prev) => ({ ...prev, flats: false }));
    }
  };

  const fetchFlatmates = async () => {
    try {
      setLoading((prev) => ({ ...prev, flatmates: true }));
      const response = await axios.get(
        "http://localhost:3000/api/user/getFlatmates"
      );
      setFlatmates(response.data.data || []);
    } catch (error) {
      console.error("Error fetching flatmates:", error);
      setFlatmates([]);
    } finally {
      setLoading((prev) => ({ ...prev, flatmates: false }));
    }
  };

  const fetchFilterFlats = async (location, minPrice, maxPrice) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/getFlats/search",
        {
          params: { location, minPrice, maxPrice },
        }
      );
      return response.data.data || [];
    } catch (error) {
      console.error("Error fetching flats:", error);
      return [];
    }
  };

  const fetchFilterFlatMates = async (location, minPrice, maxPrice) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/getFlatmates/search",
        {
          params: { location, minPrice, maxPrice },
        }
      );
      return response.data.data || [];
    } catch (error) {
      console.error("Error fetching flatmates:", error);
      return [];
    }
  };

  const handleSearch = async (searchParams) => {
    const { location, minPrice, maxPrice } = searchParams;

    // Check if all search fields are empty
    const isEmptySearch = !location && !minPrice && !maxPrice;

    if (isEmptySearch) {
      // If empty search, show all listings
      setSearchResults(null);
      return;
    }

    try {
      if (activeTab === "flats") {
        const flatsData = await fetchFilterFlats(location, minPrice, maxPrice);
        setFilterFlats(flatsData);
        setSearchResults(flatsData);
      } else {
        const flatmatesData = await fetchFilterFlatMates(
          location,
          minPrice,
          maxPrice
        );
        setFilterFlatmates(flatmatesData);
        setSearchResults(flatmatesData);
      }
    } catch (error) {
      console.error("Error during search:", error);
      setSearchResults([]);
    }
  };

  return (
    <>
      <HNavbar user={user} />
      <div className="bg-gradient-to-r from-orange-300 to-red-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Home & Flatmates
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Connect with like-minded people and discover your ideal living
              situation with FlatBuddies...
            </p>
          </div>
        </div>
      </div>
      <SearchSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleSearch}
      />
      <ResultsSection
        activeTab={activeTab}
        results={
          searchResults === null // Check if null (initial state or empty search)
            ? activeTab === "flats"
              ? flats
              : flatmates
            : searchResults // Show filtered results when available
        }
        loading={activeTab === "flats" ? loading.flats : loading.flatmates}
      />
      <Testimonials />
      <FAQ />
      <IndianCulture />
      <Footer />
    </>
  );
};

export default HomePage;
