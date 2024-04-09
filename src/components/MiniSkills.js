"use client";

import React from "react";
import { motion } from "framer-motion";

import Html from "../assets/images/skills/svg/html-5.svg";
import Css from "../assets/images/skills/svg/css-3.svg";
import Js from "../assets/images/skills/svg/javascript.svg";
import ReactLogo from "../assets/images/skills/svg/react.svg";
import Tailwind from "../assets/images/skills/svg/tailwindcss-icon.svg";
import Mongo from "../assets/images/skills/svg/mongodb-icon.svg";
import Firebase from "../assets/images/skills/svg/firebase.svg";
import Node from "../assets/images/skills/svg/nodejs-icon.svg";
import Github from "../assets/images/skills/svg/github-icon.svg";
import Next from "../assets/images/skills/svg/nextjs-icon.svg";

import Image from "next/image";

const MiniSkills = () => {
	const devTools = [
		{
			id: 4,
			name: "Javascript",
			logo: Js,
		},
		{
			id: 5,
			name: "Firebase",
			logo: Firebase,
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
		<div className="flex items-center justify-center h-auto gap-5" id="skills">
			{devTools.map((devTool) => (
				<motion.div
					whileHover={{ scale: 1.1 }}
					key={devTool.id}
					className="hover:cursor-pointer mx-2.5 justify-center">
					<Image src={devTool.logo} height={50} alt={devTool.name} />
				</motion.div>
			))}
		</div>
	);
};

export default MiniSkills;
