import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function MedalBarChart() {
  const data = [
    { medal: "Gold", count: 10 },
    { medal: "Silver", count: 12 },
    { medal: "Bronze", count: 15 },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="medal" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MedalBarChart;
