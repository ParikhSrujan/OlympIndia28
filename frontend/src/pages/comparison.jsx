import { useState } from "react";

function Comparison() {
  const [country, setCountry] = useState("USA");

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Country Comparison
      </h1>

      <p className="text-gray-700 mb-8">
        Compare India’s Olympic performance with other leading nations.
      </p>

      {/* Country Selector */}
      <div className="mb-8 max-w-sm">
        <label className="block mb-2 font-medium">Select Country</label>
        <select
          className="border rounded-lg p-3 w-full"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>USA</option>
          <option>China</option>
          <option>Japan</option>
          <option>Great Britain</option>
          <option>Germany</option>
        </select>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* India */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">India</h2>

          <ul className="space-y-2">
            <li>Gold: 10</li>
            <li>Silver: 12</li>
            <li>Bronze: 15</li>
            <li className="font-semibold">Total: 37</li>
          </ul>
        </div>

        {/* Selected Country */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">{country}</h2>

          <ul className="space-y-2">
            <li>Gold: -</li>
            <li>Silver: -</li>
            <li>Bronze: -</li>
            <li className="font-semibold">Total: -</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
