"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Za from "../assets/images/Za.png";
import Facebook from "../assets/images/logo/facebook.png";
import Twitter from "../assets/images/logo/twitter.png";
import Linkedin from "../assets/images/logo/linkedin.png";
import Instagram from "../assets/images/logo/instagram.png";
import Github from "../assets/images/logo/github.png";

import MiniSkills from "./MiniSkills";
import Navbar from "./Navbar";

const Bio = () => {
	return (
		<section className={"lg:h-full h-auto"}>
			<Navbar />
			<div className="bg-white h-[90vh] flex flex-col scroll-smooth" id="bio">
				<div className="w-full flex lg:flex-row flex-col-reverse justify-between items-center lg:pl-20 overflow-hidden">
					{/* Left */}
					<motion.div
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							duration: 2,
							type: "spring",
							stiffness: 50,
							ease: "linear",
						}}
						className="flex flex-col lg:items-start lg:text-left text-center gap-2">
						<h2 className="text-lg font-light">Je suis,</h2>
						<h3 className="lg:text-4xl text-2xl text-[#30475E] font-bold">
							Developpeur
						</h3>
						<h1 className="lg:text-6xl text-3xl font-bold text-[#30475E]">
							{"</>"} Javascript
						</h1>
						<p className="text-gray-600">
							Je fais des applications web et mobiles.
						</p>
						{/* Social media */}
						<div className="flex items-center z-10">
							<div className="bg-[#30475E] h-2 w-20" />
							<a href="#">
								<Image
									className="hover:animate-bounce"
									src={Github}
									height={50}
									width={50}
									alt="Twitter"
								/>
							</a>
							<a href="#">
								<Image
									className="hover:animate-bounce"
									src={Twitter}
									height={50}
									width={50}
									alt="Twitter"
								/>
							</a>
							<a href="#">
								<Image
									className="hover:animate-bounce"
									src={Linkedin}
									height={50}
									width={50}
									alt="Linkedin"
								/>
							</a>
							<a href="#">
								<Image
									className="hover:animate-bounce"
									src={Instagram}
									height={50}
									width={50}
									alt="Instagram"
								/>
							</a>
							<a href="#">
								<Image
									className="hover:animate-bounce"
									src={Facebook}
									height={50}
									width={50}
									alt="Facebook"
								/>
							</a>
						</div>
					</motion.div>

					{/* right */}
					<Image priority src={Za} height={500} alt="Alpha" className="" />
				</div>
				<div className="w-full flex lg:flex-row flex-col gap-5 px-5 py-2.5 lg:justify-between justify-center items-center bg-[#30475E]">
					<div className={"flex gap-5"}>
						<div className="flex flex-row items-center">
							<h1 className="text-6xl font-bold text-white">5</h1>
							<p className="uppercase text-sky-200">
								Ans <br /> d&apos;experience
							</p>
						</div>
						<div className="flex flex-row items-center">
							<h1 className="text-6xl font-bold text-white">+10</h1>
							<p className="uppercase text-sky-200">
								Projets <br /> dans le monde
							</p>
						</div>
					</div>

					<MiniSkills />
				</div>
			</div>
		</section>
	);
};

export default Bio;
