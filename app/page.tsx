import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Hero } from "@/components/hero";
import { About } from "@/components/about-us";
import { Benefits } from "@/components/benefits";
import { CardInfo } from "@/components/card";

export default function Home() {
	return (
		<><section>
			<Hero />
		</section>
		<section>
			<About/>
		</section>
		<section>
			<Benefits/>
		</section>
		<section>
			<CardInfo/>
		</section>
		</>
	);
}
