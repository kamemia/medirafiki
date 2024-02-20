'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { FaChevronDown } from "react-icons/fa";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	
} from "@/components/icons";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Logo } from "@/components/icons";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">Medirafiki</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					
						<NavbarItem key="family planning">
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href="/blog"
							>
								Eligibility Criteria
							</NextLink>
						</NavbarItem>
						<Dropdown
					showArrow
					classNames={{
						base: "before:bg-default-200", // change arrow background
						content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
					}}
					>
					<NavbarItem>
						<DropdownTrigger>
						<Button
							disableRipple
							className="p-0 bg-transparent data-[hover=true]:bg-transparent font-bold"
							radius="sm"
							endContent={<FaChevronDown />}
							variant="light"
						>
							Family planning methods</Button>
						</DropdownTrigger>
					</NavbarItem>
					<DropdownMenu className="flex flex-col">
						<DropdownItem className="flex" key="oral contraceptives">Oral contraceptives</DropdownItem>
						<DropdownItem key="breastfeeding">Breastfeeding</DropdownItem>
						<DropdownItem key="withdrawal">Withdrawal</DropdownItem>
						<DropdownItem key="Cervical caps" >Cervial caps</DropdownItem>
						<DropdownItem key="View more" href="/blog">View more</DropdownItem>
					</DropdownMenu>
				</Dropdown>
					
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};