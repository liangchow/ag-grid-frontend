import { useMemo } from "react";
import type { Row } from "../types/Row";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";

ChartJS.register(LinearScale, LogarithmicScale, PointElement, LineElement, Title, Tooltip, Legend)

type Props = {
  data: Row[]
}

function Chart({ data }: Props) {

  const points = useMemo(() => data.filter((d): d is Required<Row> =>
            d.pressure != null &&
            d.void_ratio != null &&
            d.pressure > 0
        ).map((d) => ({
          x: d.pressure,
          y: d.void_ratio,
        })),
    [data]
  )

  const chartData: ChartData<"line"> = useMemo(
    () => ({
      datasets: [
        {
          label: "Void Ratio vs Pressure",
          data: points,
          borderColor: "rgba(75, 192, 192, 0.6)",
          backgroundColor: "rgba(75, 192, 192, 1)",
          tension: 0.2,
          pointRadius: 3,
        },
      ],
    }),
    [points]
  )

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "e-log P Curve",
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const x = ctx.parsed.x;
            const y = ctx.parsed.y;
            return `Pressure: ${x.toFixed(3)}, Void Ratio: ${y.toFixed(4)}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "logarithmic",
        title: {
          display: true,
          text: "Pressure",
        },
      },
      y: {
        title: {
          display: true,
          text: "Void Ratio",
        },
      },
    },
  }

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}

export default Chart