import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import WelcomeSlide from "../../components/screens/WelcomeSlide";
import GallerySlide from "../../components/screens/GallerySlide";
import { useSelector } from "react-redux";
import Header from "../../components/screens/Header";
import Footer from "../../components/screens/Footer";
import Layout from "../../components/screens/Layout";
import ChartSlide from "../../components/screens/ChartSlide";

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
			<Header />
			<Layout>
				<Routes>
					<Route path="/" element={[<WelcomeSlide />]} />
					<Route path="/gallery" element={[<GallerySlide />]} />
					<Route path="/chart" element={[<ChartSlide />]} />
				</Routes>
			</Layout>
			<Footer />
		</>
	);
}
