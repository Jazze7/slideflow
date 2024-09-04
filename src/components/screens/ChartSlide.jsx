import React from "react";

// packages
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// component
import { Button } from "@mui/material";

// Icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

	// Framer Motion animation variants
	const chartVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<div>
			<motion.div
				id="chart"
				className="w-full sm:w-3/4 md:w-1/2 m-auto pt-14"
				variants={chartVariants}
				initial="hidden"
				animate="visible"
			>
				<Chart options={options} series={series} type="line" />
			</motion.div>
			<div className="flex justify-center mt-10">
				<Link to="/code-compiler">
					<Button
						variant="contained"
						className="!mt-5 !mr-4
				!font-['Roboto-Bold']
			"
						startIcon={<ArrowBackIcon />}
					>
						Previous
					</Button>
				</Link>
				<Link to="/end-slide">
					<Button
						variant="contained"
						className="!mt-5
				!font-['Roboto-Bold']"
						endIcon={<ArrowForwardIcon />}
					>
						Next
					</Button>
				</Link>
			</div>
		</div>
	);
}
