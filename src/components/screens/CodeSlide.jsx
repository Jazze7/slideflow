import React, { useState } from "react";

// packages
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

// router
import { Link } from "react-router-dom";

// Icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// component
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function CodeSlide() {
	const darkMode = useSelector((state) => state.theme.darkMode); //toggle darkmode

	const [data, setData] = useState(
		`function greet(name) {
	  return \`Hello, \${name}!\`;
	}
	
	console.log(greet("World"));`
	);

	return (
		<>
			<motion.h1
				className="font-['Bungee-Tint'] mb-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				Code Block
			</motion.h1>
			<motion.span
				className="block mb-3 font-['Roboto-Bold']"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
			>
				Paste your code here
			</motion.span>
			<motion.textarea
				value={data}
				onChange={(e) => setData(e.target.value)}
				className="w-full h-40 border-2 border-blue-500 rounded"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.2 }}
			/>
			<motion.span
				className="block font-['Roboto-Bold'] mb-6"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
			>
				Output:
			</motion.span>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 0.6 }}
			>
				<SyntaxHighlighter language="javascript" style={dark}>
					{data}
				</SyntaxHighlighter>
			</motion.div>
			<div className="flex justify-center">
				<Link to="/gallery">
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
				<Link to="/code-compiler">
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
		</>
	);
}
