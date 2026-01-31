function Rankings() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Global Rankings</h1>

      <p className="text-gray-700 mb-8">
        Sport-wise global rankings with India highlighted for comparison.
      </p>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Country</th>
              <th className="p-4">Gold</th>
              <th className="p-4">Silver</th>
              <th className="p-4">Bronze</th>
              <th className="p-4">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">1</td>
              <td className="p-4 font-medium">USA</td>
              <td className="p-4">39</td>
              <td className="p-4">41</td>
              <td className="p-4">33</td>
              <td className="p-4 font-semibold">113</td>
            </tr>

            <tr className="border-b bg-blue-50">
              <td className="p-4">7</td>
              <td className="p-4 font-medium text-blue-600">India</td>
              <td className="p-4">10</td>
              <td className="p-4">12</td>
              <td className="p-4">15</td>
              <td className="p-4 font-semibold">37</td>
            </tr>

            <tr>
              <td className="p-4">8</td>
              <td className="p-4 font-medium">Germany</td>
              <td className="p-4">9</td>
              <td className="p-4">10</td>
              <td className="p-4">11</td>
              <td className="p-4 font-semibold">30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rankings;
