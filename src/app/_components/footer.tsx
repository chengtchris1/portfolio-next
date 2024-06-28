import Container from '@/app/_components/container';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-black text-white">
            <Container>
                <div className="flex flex-col items-center py-28">
                    <Link href={'https://www.linkedin.com/in/chengtchris/'}>
                    <h4 className="text-center text-4xl font-bold leading-tight tracking-tighter mb-1 lg:w-1/4 lg:text-left hover:underline">
                        LinkedIn
                    </h4>
                    </Link>
                    <Link href={ 'https://github.com/chengtchris1' }>
                    <h4 className="text-center text-4xl font-bold leading-tight tracking-tighter mb-1 lg:w-1/4 lg:text-left hover:underline">
                        Github
                    </h4>
                    </Link>

                </div>
            </Container>
        </footer>
    );
}

export default Footer;
