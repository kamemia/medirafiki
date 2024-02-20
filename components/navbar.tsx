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
			<NavbarContent>
				<Dropdown>
					<NavbarItem>
						<DropdownTrigger>
						<Button>Features</Button>
						</DropdownTrigger>
					</NavbarItem>
					<DropdownMenu>
						<DropdownItem key="hello" description="hello">Hello</DropdownItem>
						<DropdownItem key="hello" description="hello">Hello</DropdownItem>
						<DropdownItem key="hello" description="hello">Hello</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
        		</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};
