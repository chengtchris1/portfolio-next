import { CMS_NAME } from '@/lib/constants';
import Carausel from '@/app/_components/carausel';
export function Intro() {
    return (
        <section className="mb-16 mt-16 pb-8 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
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
            <p className="mt-5 w-screen p-5 text-left text-lg md:w-auto md:pl-8">

            My journey in coding began in elementary school where I created
              VBS scripts to do various tasks with my computer (such as opening
              the CD drive)—igniting a passion that has stayed with me
              throughout my career. I realized my heart is in software
              engineering. I noticed the tasks I enjoyed the most involved
              tinkering and playing with cool applications with little
              oversight.
                <br/><br/>
              In my previous career, I leveraged cutting-edge cools
              such as PowerAutomate and UI Path: tools which my higher-ups had
              little experience with. Recently, I've been given the opportunity
              to work on various projects which have me hone my craft as a
              software engineer.

            </p>
        </section>
    );
}
