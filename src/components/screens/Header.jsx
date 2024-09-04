import React, { useState } from "react";
// Icons
import { Brightness4, Brightness7, Menu, Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
// store
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/theme/ThemeSlice";

// router
import { Link } from "react-router-dom";

export default function Header() {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.theme.darkMode);
	const [menuOpen, setMenuOpen] = useState(false);
	
// to open hamburger
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="h-24 flex items-center w-[90%] mx-auto">
			<nav className="flex justify-between items-center w-full ">
				<h1 className="font-['Bungee-Tint'] text-2xl md:text-3xl lg:text-4xl">
					<Link to="/">SLIDE FLOW</Link>
				</h1>
				<div className="md:hidden">
					<IconButton color="inherit" onClick={toggleMenu}>
						{menuOpen ? <Close /> : <Menu />}
					</IconButton>
				</div>
				<ul
					className={`${
						menuOpen ? "flex bg-white dark:bg-gray-800" : "hidden"
					} flex-col md:flex-row md:flex justify-between items-center w-full md:w-auto absolute md:static top-16 right-0 md:top-auto md:right-auto p-4 md:p-0 z-50 md:z-auto`}
				>
					<li className="mr-3">
						<Link to="/">Home</Link>
					</li>
					<li className="mr-3">
						<Link to="/gallery">Gallery</Link>
					</li>
					<li className="mr-3">
						<Link to="/code-block">CodeBlock</Link>
					</li>
					<li className="mr-3">
						<Link to="/code-compiler">Python Compiler</Link>
					</li>
					<li className="mr-3">
						<Link to="/chart">Chart</Link>
					</li>
					<li>
						<IconButton
							color="inherit"
							onClick={() => dispatch(toggleTheme())}
							className="ml-4"
						>
							{darkMode ? <Brightness7 /> : <Brightness4 />}
						</IconButton>
					</li>
				</ul>
			</nav>
		</header>
	);
}
