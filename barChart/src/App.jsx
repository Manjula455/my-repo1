import { useState } from "react";
import "./App.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale);
function App() {
  const data = {
    labels: ["jan", "feb", "march"],
    datasets: [
      {
        label: "Sales",
        data: [20, 60, 45],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div style={{ width: 400, height: 300 }}>
      <Bar data={data} />
    </div>
  );
}

export default App;
