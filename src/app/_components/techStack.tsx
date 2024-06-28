export default function TechStack({ techStack }: { techStack: string[] }) {
    return (
        <div className="flex flex-wrap">
            {techStack?.map((tech) => (
                <span key={tech} className="mr-2 border rounded-2xl p-2 my-1">
                    {tech}
                </span>
            ))}
        </div>
    );
}