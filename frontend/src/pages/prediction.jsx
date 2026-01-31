import { useState } from "react";
import MedalBarChart from "../components/MedalBarChart";

function Prediction() {
  const [sport, setSport] = useState("Athletics");
  const [year, setYear] = useState(2028);

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Medal Prediction
      </h1>

      {/* Selectors */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Sport Dropdown */}
        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">Select Sport</label>
          <select
            className="border rounded-lg p-3"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          >
            <option>Athletics</option>
            <option>Shooting</option>
            <option>Wrestling</option>
            <option>Badminton</option>
            <option>Boxing</option>
          </select>
        </div>

        {/* Year Dropdown */}
        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">Select Year</label>
          <select
            className="border rounded-lg p-3"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value={2028}>2028</option>
          </select>
        </div>
      </div>

      {/* Result Box (placeholder for ML output) */}
      <div className="bg-white shadow-md rounded-xl p-8">
        <h2 className="text-xl font-semibold mb-4">
          Predicted Medals for {sport} ({year})
        </h2>

        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-yellow-100 rounded-lg p-4">
            <p className="font-bold text-lg">Gold</p>
            <p className="text-2xl mt-2">-</p>
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <p className="font-bold text-lg">Silver</p>
            <p className="text-2xl mt-2">-</p>
          </div>

          <div className="bg-orange-200 rounded-lg p-4">
            <p className="font-bold text-lg">Bronze</p>
            <p className="text-2xl mt-2">-</p>
          </div>
        </div>
        <div className="mt-10 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Medal Distribution Visualization
          </h2>

          <MedalBarChart />
        </div>
      </div>
    </div>
  );
}

export default Prediction;
