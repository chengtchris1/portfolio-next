import { CMS_NAME } from '@/lib/constants';
import Carausel from '@/app/_components/carausel';
export function Intro() {
    return (
        <section className="mb-16 mt-16 pb-8 flex flex-col items-start lg:mb-12 md:flex-row lg:justify-between">
            <div className="flex flex-col h-[450px] w-full items-center justify-center">
                <div className='p-0 m-0 w-full'>
                <h1 className="w-full pl-0 p-5 pb-0 pt-8 font-bold leading-tight tracking-tighter md:w-auto md:min-w-96 md:pr-8 text-6xl">
                    About Me
                </h1>
                </div>
                <div className="flex flex-grow-1 w-full h-full items-center justify-center drop-shadow-2xl">
                    <Carausel />
                    {/*<div className="h-52 w-52 overflow-clip bg-opacity-50 bg-gradient-to-br from-green-400 to-blue-600 mb-10 border-y-4 border-x-4 border-b-8 border-black drop-shadow-md">
                    <img className="p-0" src={'/assets_new/portrait.png'} />
                    </div>*/}
                </div>
            </div>
            <p className="mt-0 md:mt-12 md:p-10 text-left text-lg w-fit">

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
