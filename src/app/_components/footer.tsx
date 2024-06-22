import Container from '@/app/_components/container';
import { EXAMPLE_PATH } from '@/lib/constants';

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-black text-white">
            <Container>
                <div className="flex flex-col items-center py-28 lg:flex-row">
                    <h4 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]">
                        Github
                    </h4>
                    <h4 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]">
                        LinkedIn
                    </h4>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
