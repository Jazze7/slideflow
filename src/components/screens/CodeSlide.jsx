import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSlide() {
	const [data, setData] = useState(
		`function greet(name) {
	  return \`Hello, \${name}!\`;
	}
	
	console.log(greet("World"));`
	);

	return (
		<>
			<h1 className="font-['Bungee-Tint'] mb-5">Code Block</h1>
			<span className="block mb-3 font-['Roboto-Regular']">
				Paste your code here
			</span>
			<textarea
				value={data}
				onChange={(e) => setData(e.target.value)}
				className="w-full h-40 border-2 border-blue-500 rounded"
			/>
			<SyntaxHighlighter language="javascript" style={dark}>
				{data}
			</SyntaxHighlighter>
		</>
	);
}
