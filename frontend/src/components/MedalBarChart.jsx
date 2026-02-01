import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MedalBarChart({ medals }) {
  const data = [
    { medal: "Gold", count: medals.gold || 0 },
    { medal: "Silver", count: medals.silver || 0 },
    { medal: "Bronze", count: medals.bronze || 0 },
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
