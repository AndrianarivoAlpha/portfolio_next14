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
			id: 1,
			name: "Javascript",
			logo: Js,
			description:
				"Je suis tombe amoureux de cette technologie depuis que je l'ai rencontre en 2018.",
		},
		{
			id: 8,
			name: "ReactJs",
			logo: ReactLogo,
			description:
				"Le framwork des champions. C'est un outil fort et robuste pour creer ce qu'on veut.",
		},
		{
			id: 9,
			name: "Tailwind css",
			logo: Tailwind,
			description: "Depuis 2020, j'utilise TailwindCSS.",
		},
	];

	const backendTools = [
		{
			id: 10,
			name: "NextJS",
			logo: Next,
		},
		{
			id: 7,
			name: "NodeJs",
			logo: Node,
		},
		{
			id: 2,
			name: "MongoDB",
			logo: Mongo,
		},
	];

	const desing = {
		id: 4,
		name: "Figma",
		logo: Figma,
	};

	return (
		<>
			<div className="w-full flex flex-col gap-5 lg:px-52 px-2" id="skills">
				<div>
					<h1 className="lg:text-3xl text-xl font-semibold text-white">
						Mes outils
					</h1>
					<p className={`text-gray-200`}>
						Quelques technologies que j&apos;utilise pour creer votre futur
						application from scratch.
					</p>
				</div>
				<motion.div className={"w-full grid lg:grid-cols-3 gap-5"}>
					{devTools.map((devTool) => (
						<motion.div
							whileHover={{ scale: 1.1 }}
							key={devTool.id}
							className="hover:cursor-pointer rounded-lg border border-gray-500 w-full flex flex-col items-center justify-center overflow-hidden p-5 gap-5">
							<Image src={devTool.logo} height={60} alt={devTool.name} />
							<div className="flex flex-col gap-5">
								<h1 className="text-lg text-white font-semibold">
									{devTool.name}
								</h1>
								<p className="text-gray-200">{devTool.description}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
				<div className="flex lg:flex-row flex-col gap-5">
					<motion.div
						className={
							"flex-1 flex flex-col gap-5 border border-gray-500 items-center rounded-lg bg-lime-950/50 p-5"
						}>
						<div className="flex gap-5 justify-around">
							{backendTools.map((devTool) => (
								<motion.div
									whileHover={{ scale: 1.1 }}
									key={devTool.id}
									className="hover:cursor-pointer flex flex-col items-center overflow-hidden">
									<Image src={devTool.logo} height={40} alt={devTool.name} />
									<h1 className="text-lg text-white font-semibold">
										{devTool.name}
									</h1>
								</motion.div>
							))}
						</div>
						<div className="flex flex-col gap-5">
							<h1 className="text-lg text-white font-semibold">
								Backend avec Next.JS et NodeJs
							</h1>
							<p className="text-gray-200">
								Cote backend, j&apos;utilise les frameworks Next.js et Nodejs.{" "}
								<br />
								MongoBD aussi est souvent utilise pour la NoSQL database.
							</p>
						</div>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						className="hover:cursor-pointer justify-center overflow-hidden p-5 gap-5 border border-gray-500 rounded-lg">
						<Image src={desing.logo} height={60} alt={desing.name} />
						<div className="flex flex-col gap-5">
							<h1 className="text-lg text-white font-semibold">
								{desing.name}
							</h1>
							<p className="text-gray-200">
								Je fais aussi de design avec ce merveilleux outil.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;
