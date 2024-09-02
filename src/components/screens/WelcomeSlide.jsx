import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// package
import Typical from "react-typical";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function WelcomeSlide() {
	const darkMode = useSelector((state) => state.theme?.darkMode);
	console.log(darkMode, "==dark mode");

	return (
		<>
			<div
				style={{ height: "calc(100vh - 200px)" }}
				className=" flex flex-col h-[calc(100vh-180px)"
			>
				<div className="m-auto font-['Bungee-Tint'] text-center">
					<Typical
						steps={[
							"Hello there,",
							1250,
							"Welcome to the SlideFlow",
							1250,
						]}
						wrapper="h1"
						loop={1}
					/>
				</div>
				<Link to="/gallery">
					<Button
						variant="contained"
						className="!font-['Roboto-Bold']"
						endIcon={<ArrowForwardIcon />}
					>
						Next
					</Button>
				</Link>
			</div>
		</>
	);
}
