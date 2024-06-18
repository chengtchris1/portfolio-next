import { CMS_NAME } from '@/lib/constants';
import Carausel from '@/app/_components/carausel';
export function Intro() {
    return (
        <section className="mb-16 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <div className="flex flex-col">
                <h1 className="w-screen p-5 pb-5 pt-8 text-6xl font-bold leading-tight tracking-tighter md:w-auto md:min-w-96 md:pr-8 md:text-7xl">
                    About Me
                </h1>
                <div className="flex w-full items-center justify-center drop-shadow-2xl">
                    <Carausel />
                    {/*<div className="h-52 w-52 overflow-clip bg-opacity-50 bg-gradient-to-br from-green-400 to-blue-600 mb-10 border-y-4 border-x-4 border-b-8 border-black drop-shadow-md">
                    <img className="p-0" src={'/assets_new/portrait.png'} />
                    </div>*/}
                </div>
            </div>
            <h4 className="mt-5 w-screen p-5 text-left text-lg md:w-auto md:pl-8">
                A statically generated blog example using{' '}
                <a
                    href="https://nextjs.org/"
                    className="underline transition-colors duration-200 hover:text-blue-600"
                >
                    Next.js
                </a>{' '}
                and {CMS_NAME}.
            </h4>
        </section>
    );
}
