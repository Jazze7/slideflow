import React, { useState, useEffect } from "react";

// packages
import MonacoEditor from "@monaco-editor/react";
import { Button, Container, Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

// store
import { useSelector } from "react-redux";
// api
import { executeCode } from "../utilities/api";
import { Link } from "react-router-dom";

// Icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CompilerPy() {
	const [code, setCode] = useState(
		`\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("John")\n`
	);
	const [output, setOutput] = useState(null);
	const [loading, setLoading] = useState(false);

	// run code in the editor
	const runCode = async () => {
		const sourceCode = code;
		if (!sourceCode) return;
		setLoading(true);
		try {
			const result = await executeCode("python", sourceCode);
			setOutput(result.run.output); // Update the output state
		} catch (error) {
			console.error("Error executing code:", error);
			setOutput(error.message); // Optionally set the error message as output
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<motion.h1
				className="mb-6 font-['Bungee-Tint'] text-3xl md:text-5xl text-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				Python Compiler
			</motion.h1>
			<Container className="flex flex-col md:flex-row justify-between items-stretch">
				<motion.div
					style={{ height: "60vh" }}
					className="md:w-[48%] w-full mb-10 md:mb-0"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<span className="block font-['Roboto-Regular'] mb-2 md:mb-6">
						Input:
					</span>
					<MonacoEditor
						height="100%"
						theme="vs-dark"
						language={"python"}
						value={code}
						onChange={(value) => setCode(value)}
						options={{
							selectOnLineNumbers: true,
							minimap: { enabled: false },
							scrollBeyondLastLine: false,
							automaticLayout: true,
						}}
					/>
				</motion.div>
				<motion.div
					className="md:w-[48%] w-full"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<div className="flex items-center mb-2 md:mb-4">
						<Button
							onClick={() => runCode()}
							className="!font-['Roboto-Regular']"
							variant="contained"
							color="success"
						>
							Run code
						</Button>
						<span className="block font-['Roboto-Regular'] ml-3">
							Output:
						</span>
					</div>

					<Box
						height={"60vh"}
						p={2}
						sx={{
							border: "1px dashed grey",
							bgcolor: "black",
							overflowY: "auto",
						}}
					>
						{loading ? (
							<CircularProgress />
						) : (
							<pre className="block !text-white">
								{output
									? output
									: "Click 'Run code' to see output here"}
							</pre>
						)}
					</Box>
				</motion.div>
			</Container>
			<div className="flex justify-center mt-10">
				<Link to="/code-block">
					<Button
						variant="contained"
						className="!mt-5 !mr-4
						!font-['Roboto-Bold']"
						startIcon={<ArrowBackIcon />}
					>
						Previous
					</Button>
				</Link>
				<Link to="/chart">
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
