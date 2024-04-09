
const Footer = () => {
	return (
		<div
			className="px-5 w-full flex flex-col items-center justify-center mt-10 bg-slate-800 p-5"
			id="footer">
			<p className="text-white">Copyright {new Date(Date.now()).getFullYear()}</p>
		</div>
	);
};

export default Footer;
