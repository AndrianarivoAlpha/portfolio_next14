import { GeistSans } from "geist/font/sans";
import { Anek_Telugu } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
	subsets: ["latin"],
	variable: "--font-caption",
});

export const metadata = {
	title: "Abelandrianarivo Alpha - Developpeur Javascript",
	description:
		"Developper Javascript et UI Designer en freelance a Madagascar.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" className="h-full">
			<body className={cn(GeistSans.variable, AnekTelugu, "font-sans h-full")}>
				{children}
			</body>
		</html>
	);
}
