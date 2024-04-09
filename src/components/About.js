"use client";

import { motion } from "framer-motion";
import Skills from "./Skills";

const About = () => {
	return (
		<motion.div
			className=" scroll-smooth"
			id="about">
			<motion.div className="h-full flex flex-col justify-between gap-10 lg:px-20 px-2 py-5">
				<div classname={"w-full flex-row"}>
					<div className="lg:w-1/2 flex flex-col gap-5">
						<h1 className="text-3xl font-semibold">Moi,</h1>
						<p className={``}>
							Je suis developpeur web et mobile, je suis responsable du design
							et de developpement. <br />
							Mon but est de creer une application responsive avec une
							experience utilisateur qui repond la neccecite aux diverses normes
							et exigences.
						</p>

						<a
							href="https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/cv%2FCV%20Alpha.pdf?alt=media&token=d6b98e31-7c49-4ca3-9b1e-c96f01570edf"
							download>
							<button
								type="button"
								className="   hover:text-[#FF4C29] bg-none outline outline-2 outline-[#FF4C29] focus:ring-4 focus:outline-none focus:ring-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:shadow-md">
								Telechager mon CV
							</button>
						</a>
					</div>
					<div />
				</div>
				<div className={"flex flex-row"}>
					<div className={"lg:w-1/2 lg:flex hidden"} />
					<Skills />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default About;
