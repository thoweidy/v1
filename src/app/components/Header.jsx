"use client"
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    const pathname = usePathname()
    return (
        <Fragment>
            {/** JPL Main Header */}

            {/** Wrapper */}
            <div className="py-3 bg-gradient-to-l from-red-950 to-red-800">
                <div className="container flex flex-row px-3 mx-auto">
                    <div className="mr-5">
                        <Image src="/images/jpl_logo-236x70.png" alt="JPL Logo" className="w-full" width={70} height={70} />
                    </div>
                    <div className="">
                        <Link className="px-2 font-thin leading-7 text-white border-r font-RobotoCondensed " href="/">JPL SPACE</Link>
                        <Link className="px-2 font-thin leading-7 text-white border-r font-RobotoCondensed" href="/">JPL</Link>
                        <Link className="px-2 font-thin leading-7 text-white border-r font-RobotoCondensed" href="/">Caltech</Link>
                        <Link className="px-2 font-thin leading-7 text-white font-RobotoCondensed" href="/">NASA</Link>
                    </div>
                </div>
            </div>

            {/** Application Sub-Header */}
            <nav className="sticky top-0 z-50 px-3 pt-2 shadow-md bg-white/70 dark:bg-jplgray-800/70 backdrop-blur-lg dark:shadow-jplgray-800">
                {/** Title Header */}
                <div className="container flex items-center mx-auto border-b border-gray-300 dark:border-gray-600">
                    <div className="pr-8 text-4xl text-red-800 border-r border-gray-300 dark:text-white dark:border-gray-600 font-Roboto">357</div>
                    <div className="pl-8 text-3xl font-light font-Roboto">Redbooks</div>
                    <div className="flex items-center justify-end flex-grow pb-1">
                        <ThemeSwitcher />
                    </div>
                </div>
                {/** Links */}
                <div className="container flex flex-row py-2 mx-auto space-x-2">
                    <Link className={`px-8 rounded-sm text-lg ${pathname === '/' ? 'font-medium dark:font-semibold text-red-800 dark:text-white bg-jplgray-200 dark:bg-jplgray-600' : 'font-light dark:text-white'} uppercase font-RobotoCondensed hover:bg-jplgray-200 dark:hover:bg-jplgray-400`} href="/">shops</Link>
                    <Link className={`px-8 rounded-sm text-lg ${pathname === '/orderstatus' ? 'font-medium dark:font-semibold text-red-800 dark:text-white bg-jplgray-200 dark:bg-jplgray-600' : 'font-light dark:text-white'} uppercase font-RobotoCondensed hover:bg-jplgray-200 dark:hover:bg-jplgray-400`} href="/orderstatus"> Reports</Link>
                </div>
            </nav>


        </Fragment>
    );
}