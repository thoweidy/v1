import Link from "next/link";


export default function Footer() {
    return (
        <div className="relative bg-jplgray-100 dark:bg-jplgray-800">
            <div className="absolute inset-x-0 top-0 h-2 transform rotate-180 shadow-md dark:shadow-sm dark:shadow-jplgray-800"></div>
            <div className="container flex items-center justify-center p-10 mx-auto">
                JPL is a federally funded research and development center staffed and managed for
                <Link href="https://www.nasa.gov/" target="_blank" className="mx-1 font-medium text-jplnasablue-dark dark:text-jplgray-400">NASA</Link> by
                <Link href="https://www.nasa.gov/" target="_blank" className="mx-1 font-medium text-jplnasablue-dark dark:text-jplgray-400">Caltech</Link>.</div>
        </div>
    );
}