import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import WelcomeSlide from "../../components/screens/WelcomeSlide";
import GallerySlide from "../../components/screens/GallerySlide";
import { useSelector } from "react-redux";

export default function AppRouter() {
	let darkMode = useSelector((state) => state.theme?.darkMode);
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [darkMode]);
	return (
		<>
			<Routes>
				<Route path="/" element={[<WelcomeSlide />]} />
				<Route path="/gallery" element={[<GallerySlide />]} />
			</Routes>
		</>
	);
}
