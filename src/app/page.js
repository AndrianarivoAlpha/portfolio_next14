import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Getintouch from "@/components/Getintouch";
import MyWork from "@/components/MyWorks";
import Skills from "@/components/Skills";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-gradient-to-r from-[#022838] to-[#030117]">
			<Bio />
			<Skills />
			<MyWork />
			<Getintouch />
			<Footer />
		</main>
	);
}
