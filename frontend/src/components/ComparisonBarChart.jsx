import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ComparisonBarChart({ india, other, country }) {
  const data = [
    {
      medal: "Gold",
      India: india.gold,
      [country]: other.gold,
    },
    {
      medal: "Silver",
      India: india.silver,
      [country]: other.silver,
    },
    {
      medal: "Bronze",
      India: india.bronze,
      [country]: other.bronze,
    },
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="medal" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="India" />
          <Bar dataKey={country} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComparisonBarChart;
