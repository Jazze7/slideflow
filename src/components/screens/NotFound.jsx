import React from "react";

// components
import { Container, Typography, Button } from "@mui/material";

// router
import { Link } from "react-router-dom";

// Icon
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => {
	return (
		<Container
			maxWidth="md"
			className="flex flex-col items-center justify-center min-h-screen px-4 text-center"
		>
			<ErrorOutlineIcon
				className="text-red-500"
				style={{ fontSize: 80 }}
			/>
			<Typography variant="h1" className="mt-4 text-6xl font-bold">
				404
			</Typography>
			<Typography variant="h5" className="mt-2 text-gray-600">
				Oops! The page you're looking for doesn't exist.
			</Typography>
			<Button
				variant="contained"
				color="primary"
				component={Link}
				to="/"
				className="mt-6 !font-['Roboto-Bold']"
			>
				Go Back Home
			</Button>
		</Container>
	);
};

export default NotFound;
