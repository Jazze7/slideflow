import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-6 mt-8 ">
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				<div className="text-center md:text-left mb-4 md:mb-0">
					<h2 className="text-xl font-bold">Demo</h2>
				</div>
				<div className="text-center mb-4 md:mb-0">
					<p>
						&copy; {new Date().getFullYear()} Your Company Name. All
						rights reserved.
					</p>
				</div>
				<div className="text-center md:text-right">
					<p>
						Contact:{" "}
						<a href="mailto:info@yourcompany.com">
							info@yourcompany.com
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
