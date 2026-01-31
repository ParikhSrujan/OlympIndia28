function Insights() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Analytical Insights
      </h1>

      <p className="text-gray-700 mb-10">
        Key observations derived from historical Olympic data and machine
        learning predictions.
      </p>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Strongest Performing Sports
          </h2>
          <p className="text-gray-600">
            India consistently performs well in Shooting, Wrestling, and
            Badminton, contributing the highest share of medals historically.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Medal Growth Trend</h2>
          <p className="text-gray-600">
            A gradual increase in India’s medal count has been observed over
            recent Olympic editions, indicating improved training infrastructure
            and athlete support.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Gap with Top Nations</h2>
          <p className="text-gray-600">
            Despite progress, a significant performance gap remains when
            compared to nations like the USA and China, especially in
            athletics-heavy events.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Strategic Recommendation
          </h2>
          <p className="text-gray-600">
            Targeted investment in high-probability sports and early talent
            identification can maximize India’s medal tally in future Olympics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insights;
