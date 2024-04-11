import About from "@/components/About";
import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Getintouch from "@/components/Getintouch";
import MyWork from "@/components/MyWorks";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col ">
			<Bio />
			<About />
			<MyWork />
			<Getintouch />
			<Footer />
		</main>
	);
}
