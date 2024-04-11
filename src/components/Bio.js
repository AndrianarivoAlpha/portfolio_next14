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
		<section className={"min-h-[100vh] flex flex-col justify-between"}>
			<Navbar />
			<div className="flex flex-col h-full" id="bio">
				<div className="w-full flex lg:flex-row flex-col-reverse justify-between items-center lg:pl-20 lg:overflow-hidden">
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
						<h3 className="lg:text-4xl text-2xl text-[#30475E] font-[900]">
							Developpeur
						</h3>
						<motion.h1
							initial={{ scale: 1.5 }}
							whileInView={{ scale: 1 }}
							transition={{
								duration: 2,
								type: "spring",
								stiffness: 50,
								ease: "linear",
							}}
							className="lg:text-6xl text-3xl font-[900] text-[#30475E]">
							{"</>"} Javascript
						</motion.h1>
						<p className="text-gray-600 text-xl font-semibold">
							Je fais des sites Web et des applications mobiles.
						</p>
						{/* Social media */}
						<div className="flex items-center z-10">
							<div className="bg-[#30475E] h-2 w-20" />
							<a href="https://twitter.com/FaFa855420">
								<Image
									className="hover:animate-bounce"
									src={Github}
									height={50}
									width={50}
									alt="GitHub"
								/>
							</a>
							<a href="https://twitter.com/FaFa855420">
								<Image
									className="hover:animate-bounce"
									src={Twitter}
									height={50}
									width={50}
									alt="Twitter"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/alpha-abelandrianarivo-4a4bb526a/"
								noopenner
								norefferer
								taget={"blank"}>
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
					<Image
						priority
						src={Za}
						height={500}
						w={500}
						alt="alpha-portfolio-image"
						className="lg:block hidden"
					/>
					<Image
						priority
						src={Za}
						height={300}
						w={300}
						alt="alpha-portfolio-image"
						className="lg:hidden lg:rounded-none object-cover rounded-full mt-2.5"
					/>
				</div>
				<div className="w-full flex lg:flex-row flex-col gap-5 lg:px-5 py-2.5 lg:justify-between justify-center items-center bg-[#30475E]">
					<div className={"flex lg:flex-row flex-col gap-5"}>
						<div className="flex flex-row items-center">
							<h1 className="lg:text-5xl text-3xl font-bold text-white">5</h1>
							<p className="uppercase text-sky-200">
								Ans <br className={"lg:block hidden"} /> d&apos;experience
							</p>
						</div>
						<div className="flex flex-row items-center">
							<h1 className="lg:text-5xl text-3xl font-bold text-white">+10</h1>
							<p className="uppercase text-sky-200">
								Projets <br className={"lg:block hidden"} /> dans le monde
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
