"use client";

import React from "react";
import { motion } from "framer-motion";

import Js from "../assets/images/skills/svg/javascript.svg";
import ReactLogo from "../assets/images/skills/svg/react.svg";
import Tailwind from "../assets/images/skills/svg/tailwindcss-icon.svg";
import Mongo from "../assets/images/skills/svg/mongodb-icon.svg";
import Firebase from "../assets/images/skills/svg/firebase.svg";
import Node from "../assets/images/skills/svg/nodejs-icon.svg";
import Github from "../assets/images/skills/svg/github-icon.svg";
import Next from "../assets/images/skills/svg/nextjs-icon.svg";
import Figma from "../assets/images/skills/svg/figma.svg";
import Aws from "../assets/images/skills/svg/aws.svg";

import Image from "next/image";

const Skills = () => {
	const devTools = [
		{
			id: 4,
			name: "Javascript",
			logo: Js,
		},
		{
			id: 3,
			name: "MongoDB",
			logo: Mongo,
		},
		{
			id: 5,
			name: "Firebase",
			logo: Firebase,
		},
		{
			id: 5,
			name: "Figma",
			logo: Figma,
		},
		{
			id: 5,
			name: "AWS",
			logo: Aws,
		},
		{
			id: 6,
			name: "Github",
			logo: Github,
		},
		{
			id: 7,
			name: "NodeJs",
			logo: Node,
		},
		{
			id: 8,
			name: "ReactJs",
			logo: ReactLogo,
		},
		{
			id: 9,
			name: "Tailwind css",
			logo: Tailwind,
		},
		{
			id: 10,
			name: "NextJS",
			logo: Next,
		},
	];

	return (
		<>
			<div className="m-0 lg:w-1/2 flex flex-col gap-5" id="skills">
				<div>
					<h1 className="text-3xl font-semibold">Mes compétences</h1>
					<p className={``}>Petite liste des technologies que je connais.</p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ type: "spring", stiffness: 100, duration: 5 }}
					className={
						"flex flex-row flex-wrap items-center justify-center h-auto gap-5"
					}>
					{devTools.map((devTool) => (
						<motion.div
							whileHover={{ scale: 1.1 }}
							initial={{ x: -200, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								duration: 2,
								delay: devTool.id * 0.2,
								type: "spring",
							}}
							key={devTool.id}
							className="hover:cursor-pointer rounded-lg bg-[#30475E] h-[120px] w-[100px] flex flex-col items-center justify-center overflow-hidden">
							<Image src={devTool.logo} height={60} alt={devTool.name} />
							{/* <p>{devTool.name}</p> */}
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default Skills;
