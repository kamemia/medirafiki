'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	
	// DropdownItem,
	// Dropdown,
	// DropdownTrigger
} from "@nextui-org/navbar";
import React from "react";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { FaChevronDown } from "react-icons/fa";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="bg-white-50 shadow-md ">
			<NavbarBrand as="li" className="gap-3 max-w-fit">
				<NextLink className="flex justify-start items-center gap-1" href="/">
					<Logo />
					<p className="font-bold text-inherit">Medirafiki</p>
				</NextLink>
			</NavbarBrand>
			<NavbarContent className="ml-[450px]">
				<NavbarItem>
					<Link href="/blog" className="font-bold text-black">
						Criteria Wheel
					</Link>
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
				
			</NavbarContent>
		</NextUINavbar>
	);
};
