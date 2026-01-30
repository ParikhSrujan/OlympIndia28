function Home() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">OlympINDIA28</h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-700 mb-8">
        Predicting India’s medal performance in the 2028 Olympics using data
        analytics and machine learning.
      </p>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Medal Prediction</h2>
          <p className="text-gray-600">
            Forecast gold, silver and bronze medals sport-wise for India.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Global Rankings</h2>
          <p className="text-gray-600">
            View India’s position compared to other Olympic nations.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Analytical Insights</h2>
          <p className="text-gray-600">
            Understand trends and patterns from historical Olympic data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
