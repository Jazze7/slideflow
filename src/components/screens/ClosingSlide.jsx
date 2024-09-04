import React from "react";

// packages
import Typical from "react-typical";

export default function ClosingSlide() {
	return (
		<div
			style={{ height: "calc(100vh - 236px)" }}
			className="flex flex-col h-full"
		>
			<div className="m-auto font-['Bungee-Tint'] text-center">
				<Typical
					steps={["Thank You,", 1250, "Come Again", 1250]}
					wrapper="h1"
					loop={1}
				/>
			</div>
		</div>
	);
}
