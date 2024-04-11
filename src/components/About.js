"use client";

import { motion } from "framer-motion";
import Skills from "./Skills";

const About = () => {
	return (
		<div id="about">
			<motion.div className="lg:h-full h-auto flex flex-col justify-between gap-10 lg:px-20 px-2 py-5">
				<div classname={"w-full flex-row"}>
					<div className="lg:w-1/2 flex flex-col gap-5 items-start">
						<h1 className="text-3xl font-semibold">Moi,</h1>
						<p className={``}>
							Je suis developpeur web et mobile, je suis responsable du design
							et de developpement. <br />
							Mon but est de creer une application responsive avec une
							experience utilisateur qui repond la necessite, aux diverses
							normes et exigences.
						</p>

						<button className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
							<a href="../assets/resume cv.pdf" download type="button">
								Voir mon CV
							</a>
						</button>
					</div>
					<div />
				</div>
				<div className={"flex lg:flex-row flex-col h-auto"}>
					<div className={"lg:w-1/2 lg:flex hidden"} />
					<Skills />
				</div>
			</motion.div>
		</div>
	);
};

export default About;
