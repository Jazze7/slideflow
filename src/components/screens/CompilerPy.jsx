import React, { useState } from "react";

// packages
import MonacoEditor from "@monaco-editor/react";
import { useSelector } from "react-redux";
import { Button, Container, Box, CircularProgress } from "@mui/material";

// api
import { executeCode } from "../utilities/api";

export default function CompilerPy() {
	const [code, setCode] = useState(
		`\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("John")\n`
	);
	const [output, setOutput] = useState(null);
	const [loading, setLoading] = useState(false);
	const darkMode = useSelector((state) => state.theme.darkMode); //toggle darkmode

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
			<h1 className="mb-6 font-['Bungee-Tint']">Python Compiler</h1>
			<Container className="flex justify-between">
				<div style={{ height: "600px", width: "48%" }}>
					<span className="block font-['Roboto-Regular'] mb-6">
						Input:
					</span>
					<MonacoEditor
						height="100vh"
						theme="vs-light"
						language={"python"}
						value={code}
						defaultValue="//some comment"
						onChange={(value) => setCode(value)}
						options={{
							selectOnLineNumbers: true,
							minimap: { enabled: false },
							scrollBeyondLastLine: false,
							automaticLayout: true,
						}}
					/>
				</div>
				<div
					style={{
						height: "600px",
						width: "48%",
					}}
				>
					<div className="flex">
						<Button
							onClick={() => runCode()}
							className="!mb-3  !font-['Roboto-Regular']"
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
						height={"100vh"}
						p={2}
						sx={{
							p: 2,
							border: "1px dashed grey",
							bgcolor: "black",
						}}
					>
						{loading ? (
							<CircularProgress />
						) : (
							<pre>
								{output
									? output
									: "Click 'Run code' to see output here"}
							</pre>
						)}
					</Box>
				</div>
			</Container>
		</>
	);
}
