import { Intro } from '@/app/_components/intro';
import Container from '@/app/_components/container';
export default function Post({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Container>{children}</Container>
        </main>
    );
}
