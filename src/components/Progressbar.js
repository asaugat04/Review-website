export default function Progressbar({ percentage }) {
  return (
    <div style={{ width: "200px" }}>
      <svg class="w-full h-full" viewBox="0 0 100 100">
        {/* <!-- Background circle --> */}
        <circle
          class="text-gray-200 stroke-current"
          stroke-width="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* <!-- Progress circle --> */}
        <circle
          class="text-indigo-500 stroke-current"
          style={{ stroke: " rgb(131 184 20)" }}
          stroke-width="10"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke-dasharray="251.2"
          stroke-dashoffset={251.2 - (251.2 * percentage) / 100}
        ></circle>

        {/* <!-- Center text --> */}
        <text
          x="50"
          y="50"
          font-family="Verdana"
          font-size="17"
          style={{ fill: "rgb(131 184 20)" }}
          text-anchor="middle"
          alignment-baseline="middle"
        >
          {percentage}%
        </text>
      </svg>
      <div className="text-center text-l">
        of reviewers recommend <b>Himalayan Yoga & Excursion</b>
      </div>
    </div>
  );
}
