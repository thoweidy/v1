"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { Button } from "@nextui-org/react";

export default function ThemeSwitcher(props) {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme('');

    useEffect(() => {
        setMounted(true)
        setTheme('system')
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col items-center">
            <Button isIconOnly aria-label="Like"
                className="bg-transparent"
                onClick={() => {
                    if (theme === 'light') {
                        setTheme('dark')
                    } else if (theme === 'dark') {
                        setTheme('light')
                    } else if (resolvedTheme === 'light') {
                        setTheme('dark')
                    } else {
                        setTheme('light')
                    }

                }}
            >
                {
                    theme === 'light' ? <MoonIcon className='w-5 h-5' /> :
                        theme === 'dark' ? <SunIcon className='w-5 h-5' /> :
                            resolvedTheme === 'light' ? <MoonIcon className='w-5 h-5' /> : <SunIcon className='w-5 h-5' />}
            </Button>
            <p className="text-xs font-RobotoCondensed">Switch {resolvedTheme === 'light' ? 'Dark' : 'Light'}</p>
        </div>
    )
}