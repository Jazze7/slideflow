import React from "react";
import image1 from "../../assets/images/logo.png";

const Layout = ({ children }) => {
	return (
		<div className="relative min-h-screen">
			{/* Demo Logo */}
			<div
				className="absolute top-1/2 left-1/2 "
				style={{ transform: "translate(-50%,-50%)", opacity: "0.1" }}
			>
				<img src={image1} alt="Demo Logo" className="h-full" />
			</div>

			{/* Watermark */}
			<div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
				<h1 className="text-6xl font-bold text-gray-400">
					Demo Watermark
				</h1>
			</div>

			{/* Slide Content */}
			<div className="p-4">{children}</div>
		</div>
	);
};

export default Layout;
