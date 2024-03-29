export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Medirafiki",
	description: "Discover Your Ideal Contraceptive Method",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
	
	{
		label: "Eligibility Criteria",
		href: "/blog",
	},
	{
		label: "Family planning methods",
		href: "/blog",
	},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Eligibility Criteria",
			href: "/blog",
		},
		{
			label: "Family planning methods",
			href: "/blog",
		},
	],
	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		docs: "https://nextui.org",
		discord: "https://discord.gg/",
    sponsor: "https://patreon.com/"
	},
};
