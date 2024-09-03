import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function ChartSlide() {
	// Access dark mode state from Redux store
	const isDarkMode = useSelector((state) => state.theme.darkMode);

	// Chart options based on the theme
	const options = {
		chart: {
			type: "line",
			toolbar: {
				show: true,
			},
			animations: {
				enabled: true,
			},
			background: isDarkMode ? "#333" : "#fff",
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
			labels: {
				style: {
					colors: isDarkMode ? "#f1f1f1" : "#333",
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: isDarkMode ? "#f1f1f1" : "#333",
				},
			},
		},
		animations: {
			enabled: true,
			easing: "easeinout",
			speed: 800,
			animateGradually: {
				enabled: true,
				delay: 150,
			},
			dynamicAnimation: {
				enabled: true,
				speed: 350,
			},
		},

		theme: {
			mode: isDarkMode ? "dark" : "light",
		},

		responsive: [
			{
				breakpoint: 1000, // Adjust breakpoint as needed
				options: {
					chart: {
						width: "100%",
					},
				},
			},
		],
	};

	const series = [
		{
			name: "sales",
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
		},
	];

	return (
		<div>
			<div id="chart" className="w-full sm:w-3/4 md:w-1/2 m-auto pt-14">
				<Chart options={options} series={series} type="line" />
			</div>
		</div>
	);
}
