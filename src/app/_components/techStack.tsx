export default function TechStack({ techStack }: { techStack: string[] }) {
    return techStack.map((tech) => (
        <span key={tech} className="mr-2">
            {tech}
        </span>
    ));
}
