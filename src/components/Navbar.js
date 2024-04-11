import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<nav className="flex justify-between capitalize items-end py-3 bg-gradient-to-l from-gray-100 via-sky-900 to-rose-600">
			<Link href="/" className="lg:ml-20 m-auto">
				<Logo />
			</Link>

			<div className="mr-10 lg:flex gap-10 text-base hidden">
				<a
					href="#"
					className="hover:font-semibold text-gray-50 flex flex-col items-center">
					Acceuil
					<div className="h-[10px] w-[5px] bg-gray-50" />
				</a>
				<a href="#about" className="hover:font-semibold text-gray-50">
					A Propos
				</a>
				<a href="#projects" className="hover:font-semibold text-gray-50">
					Mes projets
				</a>
				<a href="#footer" className="hover:font-semibold text-gray-50">
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
