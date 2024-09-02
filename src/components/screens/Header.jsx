import React from "react";

export default function Header() {
	return (
		<header>
			<nav className="flex justify-between">
				<h1 className="font-['Bungee-Tint']">
					<a href="/">SLIDE FLOW</a>
				</h1>
				<ul className="flex justify-between items-center    ">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/gallery">Gallery</a>
					</li>
					<li>
						<a href="#">CodeBlock</a>
					</li>
					<li>
						<a href="#">Python Compiler</a>
					</li>
					<li>
						<a href="#">Chart</a>
					</li>
					<li>
						<a href="#"></a>
					</li>
					<li>
						<a href="#">Footer</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
