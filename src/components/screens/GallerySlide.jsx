import React, { useState } from "react";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// images
import image1 from "../../assets/images/2.webp";
import image2 from "../../assets/images/7.webp";
import image3 from "../../assets/images/8.webp";
import image4 from "../../assets/images/3.webp";
import image5 from "../../assets/images/4.webp";
import image6 from "../../assets/images/5.webp";
import image7 from "../../assets/images/6.webp";
import image8 from "../../assets/images/9.webp";
import image9 from "../../assets/images/10.webp";
import { Link } from "react-router-dom";

export default function GallerySlide() {
	const images = [
		{ id: 1, image: image1 },
		{ id: 2, image: image2 },
		{ id: 3, image: image3 },
		{ id: 4, image: image4 },
		{ id: 5, image: image5 },
		{ id: 6, image: image6 },
		{ id: 7, image: image7 },
		{ id: 8, image: image8 },
		{ id: 9, image: image9 },
	];

	return (
		<Container>
			<h1 className="text-center mb-8 font-['Bungee-Tint']">
				Image Gallery
			</h1>
			<ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
				{images.map((item) => (
					<GalleryItem
						key={item.id}
						src={item.image}
						alt={`Image ${item.id}`}
					/>
				))}
			</ul>
			<div className="flex justify-center">
				<Link to="/ ">
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
				<Link to="/gallery">
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
		</Container>
	);
}

function GalleryItem({ src, alt }) {
	const [loading, setLoading] = useState(true);

	// Handle image load
	const handleImageLoad = () => {
		setLoading(false);
	};

	return (
		<li className="relative overflow-hidden rounded-lg shadow-md">
			<div
				className="relative overflow-hidden"
				style={{ paddingBottom: "100%" }}
			>
				{loading && (
					<motion.div
						className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80"
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<CircularProgress />
						<LinearProgress />
					</motion.div>
				)}
				<motion.img
					src={src}
					alt={alt}
					onLoad={handleImageLoad}
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
						loading ? "opacity-0" : "opacity-100"
					}`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7, ease: "easeIn" }}
				/>
			</div>
		</li>
	);
}
