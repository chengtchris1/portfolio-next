export default function TechStack({ techStack }: { techStack: string[] }) {
    return (
        <div className="flex flex-wrap">
            {techStack?.map((tech) => (
                <span
                    key={tech}
                    className="my-1 mr-2 rounded-xl border p-2 text-white hover:text-black bg-transparent hover:bg-white transition duration-300 font-mono text-xs"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}
