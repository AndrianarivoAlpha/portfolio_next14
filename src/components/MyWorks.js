"use client";

import * as Icon from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/Link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import Image from "next/image";

const MyWork = () => {
	const works = [
		{
			id: 6,
			src: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/mywork%2Fchat.png?alt=media&token=0d2997f2-719c-439e-891f-d33e5ce31949",
			title: "Alpha Chatbot",
			about: "Chatbot utilisant GPT-3 de OpenAI",
			link: "https://alpha-chatbot.netlify.app/",
			gradient: "#4C3A51",
		},
		{
			id: 1,
			src: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/mywork%2Fu-tube.png?alt=media&token=5fa8ecb9-556f-4c92-926a-5e91687ab040",
			title: "U Tube Downloader",
			about: "Telecharger facilement un video Youtube",
			link: "https://b-tube.netlify.app/",
			gradient: "#2C3333",
		},
		{
			id: 2,
			src: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/mywork%2Fmandefasa.png?alt=media&token=b69673fb-cda2-41d0-a2ef-af9062c26b1a",
			title: "Mandefasa",
			about: "Envoyer de l'argent vers Madagascar",
			link: "https://mandefasa.vercel.app/",
			gradient: "#301E67",
		},
		{
			id: 3,
			src: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/mywork%2Fam-market.png?alt=media&token=8cec9ac4-d695-4707-a626-1f0ce83a873d",
			title: "Am Market",
			about: "Voir le cours des cryptos.",
			link: "https://am-crypto.vercel.app/",
			gradient: "#2C74B3",
		},
		{
			id: 4,
			src: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/mywork%2Fweed-fc.png?alt=media&token=dec18bd4-78d9-4a80-842d-567e7258090f",
			title: "Weed FC",
			about: "Site Web de notre club de foot-ball du dimanche.",
			link: "https://weedfc.netlify.app/",
			gradient: "#282A3A",
		},
		,
		{
			id: 5,
			src: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/mywork%2Fxchange.png?alt=media&token=28cb2cc3-73b7-4e3f-8a20-3f197b4aecca",
			title: "XChange",
			about: "Voir en temps reel les taux de change du monde.",
			link: "https://xchange-v2.vercel.app/",
			gradient: "#2D4263",
		},
	];
	return (
		<div
			className="flex flex-col items-center justify-center h-auto px-2 py-10 mx-2 "
			id="mywork">
			<div className="flex flex-col items-center w-full gap-2 mb-5 text-center">
				<h2 className="font-semibold lg:text-2xl text-slate-800">
					Mes projets recentes
				</h2>
				<p className="text-gray-500">
					Quelque projet dont je suis le realisateur
				</p>
			</div>

			<div className="gap-2.5 grid lg:grid-cols-3 grid-cols-2">
				{works.map((work) => (
					<motion.div
						initial={{ opacity: 0, x: 200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 2,
							type: "spring",
							ease: "linear",
							delay: work.id * 0.2,
						}}
						exit={{ opacity: 0 }}
						key={work.id}
						className="flex flex-col gap-2.5 rounded-xl p-2 w-[250px] justify-between"
						style={{ background: work.gradient }}>
						<motion.a
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 200, damping: 10 }}
							href={work.link}
							target="_blank"
							rel="noopener noreferrer">
							<Image
								priority={true}
								src={work.src}
								width={250}
								height={250}
								alt={work.title}
								className="object-cover rounded-xl rounded-b-2xl bg-white"
							/>
						</motion.a>
						<div className="flex flex-col items-center gap-5 mb-2">
							<div>
								<p className="font-semibold text-white">{work.title}</p>
								<p className="text-sm font-light text-gray-300">{work.about}</p>
							</div>

							<a
								href="#"
								class="text-white bg-[#30475E] hover:bg-[#406386] focus:ring-4 focus:ring-[#30475E] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#30475E] dark:hover:bg-[#30475E] focus:outline-none dark:focus:ring-[#30475E]">
								Voir le code source
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default MyWork;
