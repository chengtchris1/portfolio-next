import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex flex-col">
      <h1 className="pt-8 pb-5 text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 md:min-w-96 w-screen md:w-auto p-5">
        About Me
      </h1>
      <div className="w-full flex items-center justify-center">
      <div className="h-52 w-52 overflow-clip rounded-3xl bg-opacity-50 bg-gradient-to-br from-green-400 to-blue-600 mb-10">
    <img className="p-0" src={'/assets_new/portrait.png'} />
      </div>
      </div>
      </div>
      <h4 className="text-left text-lg mt-5 md:pl-8 w-screen md:w-auto p-5">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
