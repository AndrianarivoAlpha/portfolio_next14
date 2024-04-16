"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Getintouch = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const toaster = () => toast.success("Le message a ete bien envoye!");
	const form = useRef();

	const resetMessage = () => {
		setName("");
		setEmail("");
		setMessage("");
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_yzv8ug2",
				"template_dszsyil",
				form.current,
				"4KGHU6Rlh3XBpx5X8"
			)
			.then(
				(result) => {
					toaster();
					resetMessage();
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="h-auto p-5 rounded-lg lg:mx-52 mx-2" id="contact">
			<div className="w-full flex lg:flex-row flex-col gap-5 lg:items-start items-center justify-around">
				<div>
					<div className="flex flex-col lg:items-start items-center gap-3">
						<h1 className="text-3xl font-semibold text-gray-200">
							Get in touch, <br />
							<span className="text-xl font-semibold ">
								Parlons de vos futur projet.
							</span>
						</h1>
					</div>
					<p className="text-lg my-5 text-white">
						Qu&apos;est ce qui vous interesse?
					</p>
					{[
						"Site web e-commerce",
						"Saass",
						"Landing page",
						"Portfolio",
						"Blog",
						"Plateforme",
					].map((item, i) => (
						<button
							key={i}
							type="button"
							className="active:bg-cyan-700 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800"
							active={true}>
							{item}
						</button>
					))}
				</div>

				<Toaster />
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col justify-center lg:w-auto w-full z-10 gap-5">
					<div className="relative xl:w-96 w-full">
						<input
							type="text"
							name="from_name"
							onChange={(e) => setName(e.target.value)}
							value={name}
							required
							className="peer m-0 block h-[58px] w-full rounded border border-solid border-slate-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-slate-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-slate-700 focus:shadow-te-primary focus:outline-none dark:bg-slate-800 dark:text-slate-500 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label
							htmlFor="floatingInput"
							className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-slate-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-slate-500">
							Votre nom
						</label>
					</div>
					<div className="relative xl:w-96">
						<input
							required
							name="user_email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							type="email"
							className="peer m-0 block h-[58px] w-full rounded border border-solid border-slate-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-slate-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-slate-700 focus:shadow-te-primary focus:outline-none dark:bg-slate-800 dark:text-slate-500 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
							id="floatingEmail"
							placeholder="Email"
						/>
						<label
							htmlFor="floatingEmail"
							className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-slate-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-slate-500">
							Addresse e-mail
						</label>
					</div>
					<div className="mb-3 xl:w-96 w-full" data-te-input-wrapper-init>
						<textarea
							name="message"
							onChange={(e) => setMessage(e.target.value)}
							value={message}
							required
							placeholder={"Votre message"}
							className="bg-white peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-slate-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							id="exampleFormControlTextarea1"
							rows="8"></textarea>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
						Envoyer
					</button>
				</form>
			</div>
		</div>
	);
};

export default Getintouch;
