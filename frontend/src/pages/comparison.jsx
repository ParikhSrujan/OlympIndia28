import { useState } from "react";
import ComparisonBarChart from "../components/ComparisonBarChart";

function Comparison() {
  const [country, setCountry] = useState("USA");

  const indiaData = {
    gold: 10,
    silver: 12,
    bronze: 15,
  };

  const otherCountryData = {
    USA: { gold: 39, silver: 41, bronze: 33 },
    China: { gold: 38, silver: 32, bronze: 18 },
    Japan: { gold: 27, silver: 14, bronze: 17 },
    Germany: { gold: 9, silver: 10, bronze: 11 },
    "Great Britain": { gold: 22, silver: 21, bronze: 22 },
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Country Comparison
      </h1>

      <p className="text-gray-700 mb-8">
        Visual comparison of India’s Olympic medal performance with other nations.
      </p>

      <div className="mb-8 max-w-sm">
        <label className="block mb-2 font-medium">
          Select Country
        </label>
        <select
          className="border rounded-lg p-3 w-full"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {Object.keys(otherCountryData).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <ComparisonBarChart
          india={indiaData}
          other={otherCountryData[country]}
          country={country}
        />
      </div>

    </div>
  );
}

export default Comparison;
