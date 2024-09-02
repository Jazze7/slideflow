import React from "react";

export default function Header() {
	return (
		<header className="h-24 flex items-center w-[90%] mx-auto">
			<nav className="flex justify-between items-center w-full ">
				<h1 className="font-['Bungee-Tint']">
					<a href="/">SLIDE FLOW</a>
				</h1>
				<ul className="flex justify-between items-center    ">
					<li className="mr-3">
						<a href="/">Home</a>
					</li>
					<li className="mr-3">
						<a href="/gallery">Gallery</a>
					</li>
					<li className="mr-3">
						<a href="#">CodeBlock</a>
					</li>
					<li className="mr-3">
						<a href="#">Python Compiler</a>
					</li>
					<li className="mr-3">
						<a href="#">Chart</a>
					</li>
					<li className="mr-3">
						<a href="#">Footer</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
