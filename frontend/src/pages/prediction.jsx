import { useEffect, useState } from "react";
import MedalBarChart from "../components/MedalBarChart";

function Prediction() {
  // Dropdown states
  const [sport, setSport] = useState("Athletics");
  const [year, setYear] = useState(2028);

  // Medal data
  const [medals, setMedals] = useState({
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock API integration
  useEffect(() => {
    setLoading(true);
    setError("");

    // Simulate backend delay
    setTimeout(() => {
      try {
        const mockApiResponse = {
          gold: 10,
          silver: 12,
          bronze: 15,
        };

        setMedals(mockApiResponse);
      } catch (err) {
        setError("Failed to fetch prediction data.");
      } finally {
        setLoading(false);
      }
    }, 1000);

  }, [sport, year]);

  return (
    <div className="p-10 max-w-4xl mx-auto">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Medal Prediction
      </h1>

      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">

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

        <div className="flex flex-col w-full">
          <label className="mb-2 font-medium">Select Year</label>
          <select
            className="border rounded-lg p-3"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            <option value={2028}>2028</option>
          </select>
        </div>
      </div>

      {/* Loading & Error */}
      {loading && (
        <p className="text-blue-600 font-medium mb-4">
          Loading predictions...
        </p>
      )}

      {error && (
        <p className="text-red-600 font-medium mb-4">
          {error}
        </p>
      )}

      {/* Medal Cards */}
      {!loading && !error && (
        <>
          <div className="bg-white shadow-md rounded-xl p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Predicted Medals for {sport} ({year})
            </h2>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-yellow-100 rounded-lg p-4">
                <p className="font-bold text-lg">Gold</p>
                <p className="text-2xl mt-2">{medals.gold}</p>
              </div>

              <div className="bg-gray-200 rounded-lg p-4">
                <p className="font-bold text-lg">Silver</p>
                <p className="text-2xl mt-2">{medals.silver}</p>
              </div>

              <div className="bg-orange-200 rounded-lg p-4">
                <p className="font-bold text-lg">Bronze</p>
                <p className="text-2xl mt-2">{medals.bronze}</p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Medal Distribution Visualization
            </h2>

            <MedalBarChart medals={medals} />
          </div>
        </>
      )}

    </div>
  );
}

export default Prediction;
