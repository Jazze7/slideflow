import React, { useEffect } from "react";

// package
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import WelcomeSlide from "../../components/screens/WelcomeSlide";
import GallerySlide from "../../components/screens/GallerySlide";
import Header from "../../components/screens/Header";
import Footer from "../../components/screens/Footer";
import Layout from "../../components/screens/Layout";
import ChartSlide from "../../components/screens/ChartSlide";
import CodeSlide from "../../components/screens/CodeSlide";
import CompilerPy from "../../components/screens/CompilerPy";
import ClosingSlide from "../../components/screens/ClosingSlide";
import NotFound from "../../components/screens/NotFound";

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
			<div className="min-h-screen">
				<Header />
				<Layout>
					<Routes>
						<Route path="/" element={[<WelcomeSlide />]} />
						<Route path="/gallery" element={[<GallerySlide />]} />
						<Route path="/chart" element={[<ChartSlide />]} />
						<Route path="/code-block" element={[<CodeSlide />]} />
						<Route
							path="/code-compiler"
							element={[<CompilerPy />]}
						/>
						<Route path="/end-slide" element={[<ClosingSlide />]} />
						<Route path="/*" element={[<NotFound />]} />
					</Routes>
				</Layout>
				<Footer />
			</div>
		</>
	);
}
