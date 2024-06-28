export default function TechStack({ techStack }: { techStack: string[] }) {
    return (
        <div className="flex flex-wrap">
            {techStack?.map((tech) => (
                <span key={tech} className="my-1 mr-2 rounded-2xl border p-2">
                    {tech}
                </span>
            ))}
        </div>
    );
}
