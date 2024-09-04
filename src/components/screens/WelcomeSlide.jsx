import React from "react";

// package
import Typical from "react-typical";
import { Link } from "react-router-dom";

// component
import Button from "@mui/material/Button";

// /Icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function WelcomeSlide() {
	return (
		<>
			<div
				style={{ height: "calc(100vh - 236px)" }}
				className=" flex flex-col "
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
