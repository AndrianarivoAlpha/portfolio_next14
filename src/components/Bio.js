"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Za from "../assets/images/Za.png";
import Facebook from "../assets/images/logo/facebook.png";
import Twitter from "../assets/images/logo/twitter.png";
import Linkedin from "../assets/images/logo/linkedin.png";
import Instagram from "../assets/images/logo/instagram.png";
import Github from "../assets/images/logo/github.png";
import Navbar from "./Navbar";

const Bio = () => {
	return (
		<section className={"flex flex-col"}>
			<Navbar />
			<div className="w-full flex-1 items-center lg:px-52 px-2 my-10 gap-5 ">
				{/* right */}
				<div className="flex lg:flex-row flex-col gap-2 lg:items-end items-center ">
					<Image
						priority
						src={Za}
						height={100}
						w={100}
						alt="alpha-portfolio-image"
						className=" object-cover rounded-full mt-2.5 border-8 pt-20 bg-gradient-to-r from-cyan-500 to-blue-500"
					/>
					<h1 className="lg:text-4xl text-2xl font-[700] dark:text-white text-white">
						Andrianarivo Alpha
					</h1>
				</div>

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
					className="flex flex-col lg:items-start lg:text-left text-center gap-2 mt-10">
					<h3 className="lg:text-2xl text-xl text-cyan-50 font-[500]">
						Developpeur fullstack en
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
						className="lg:text-5xl text-2xl font-[900] text-cyan-100">
						{"</>"} Javascript
					</motion.h1>
					<p className="text-gray-200">
						Je fais des sites Web et des applications mobiles en tant que
						entrepreneur en Freelance base a Madagascar.
					</p>
					{/* Social media */}
					<div className="flex lg:flex-row flex-col items-center z-10">
						<div className="bg-white lg:h-2 lg:w-20 w-2 h-20" />
						<div className="flex">
							<a href="https://github.com/AndrianarivoAlpha">
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
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Bio;
