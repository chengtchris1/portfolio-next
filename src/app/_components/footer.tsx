import Container from '@/app/_components/container';

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-black text-white">
            <Container>
                <div className="flex flex-col items-center py-28">
                    <h4 className="mb-1 text-center text-4xl font-bold leading-tight tracking-tighter hover:underline lg:w-1/4 lg:text-left">
                        Let's connect!
                    </h4>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
