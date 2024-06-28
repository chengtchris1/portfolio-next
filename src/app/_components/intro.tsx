import Carausel from '@/app/_components/carausel';
export function Intro() {
    return (
        <section className="mb-16 flex flex-col items-start pb-8 md:flex-row lg:mb-12 lg:justify-between">
            <div className="flex h-[450px] w-full flex-col items-center justify-center">
                <div className="m-0 w-full p-0">
                    <h1 className="w-full p-5 pb-0 pl-0 pt-8 text-6xl font-bold leading-tight tracking-tighter md:w-auto md:min-w-96 md:pr-8">
                        About Me
                    </h1>
                </div>
                <div className="flex-grow-1 flex h-full w-full items-center justify-center drop-shadow-2xl">
                    <Carausel />
                </div>
            </div>
            <p className="mt-0 w-fit text-left text-lg md:mt-12 md:p-10">
                My journey in coding began in elementary school where I created
                VBS scripts to do various tasks with my computer (such as
                opening the CD drive)—igniting a passion that has stayed with me
                throughout my career. I realized my heart is in software
                engineering. I noticed the tasks I enjoyed the most involved
                tinkering and playing with cool applications with little
                oversight.
                <br />
                <br />
                In my previous career, I leveraged cutting-edge tools such as
                PowerAutomate and UI Path: tools which my higher-ups had little
                experience with. Recently, I've been given the opportunity to
                work on various projects which have me hone my craft as a
                software engineer.
            </p>
        </section>
    );
}
