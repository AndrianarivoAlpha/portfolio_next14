import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<nav className="flex justify-between capitalize items-end py-3 lg:px-52 px-2">
			<Link href="/" className="lg:ml-0 m-auto">
				<Logo />
			</Link>

			<div className="mr-10 lg:flex gap-10 text-base hidden">
				<a href="#footer" className="hover:font-semibold text-gray-50">
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
