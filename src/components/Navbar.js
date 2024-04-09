import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<nav className="flex justify-between capitalize items-end py-3 bg-white border-b">
			<Link href="/" className="lg:ml-20 m-auto">
				<Logo />
			</Link>

			<div className="mr-10 lg:flex gap-10 text-base hidden">
				<a
					href="#"
					className="hover:font-semibold text-[#30475E] flex flex-col items-center">
					Acceuil
					<div className="h-[10px] w-[5px] bg-[#30475E]" />
				</a>
				<a href="#about" className="hover:font-semibold text-[#30475E]">
					A Propos
				</a>
				<a
					href="#projects"
					className="hover:font-semibold text-[#30475E]">
					Mes projets
				</a>
				<a href="#footer" className="hover:font-semibold text-[#30475E]">
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
