import Footer from '@/app/_components/footer';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import Container from './_components/container';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
/*
export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
    description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
    openGraph: {
        images: [HOME_OG_IMAGE_URL],
    },
};*/

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/*<link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#000000"
                />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                */}
                <meta name="msapplication-TileColor" content="#000000" />
                <meta
                    name="msapplication-config"
                    content="/favicon/browserconfig.xml"
                />
                <meta name="theme-color" content="#000" />
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    href="/feed.xml"
                />
            </head>
            <body className={`${inter.className} bg-black text-white`}>
                <div className="min-h-screen">
                    <div className="fixed z-[1000] grid h-10 w-full items-center justify-items-center bg-black backdrop-blur backdrop-brightness-[70%]">
                        <Container>
                            <Link href={'/'}>
                                <div className="text-2x ml-0 w-full font-bold">
                                    Chris Cheng
                                </div>
                                <div className="col-span-1">
                                    {/*<Navbar />*/}
                                </div>
                                <div className="col-span-2 mr-0 flex flex-row justify-self-end sm:mr-20">
                                    {/*<Link
                                href={
                                    'https://www.linkedin.com/in/chengtchris/'
                                }
                            >
                                <FaLinkedin className="mx-3" />
                            </Link>
                            <Link href={'https://github.com/chengtchris1'}>
                                <LuGithub className="mx-3" />
                            </Link>*/}
                                </div>
                            </Link>
                        </Container>
                    </div>
                    {children}
                    <div className="fixed bottom-0 z-[1000] flex h-10 w-screen flex-row items-center justify-end bg-black">
                        <Container>
                            <div className="flex flex-row items-center justify-end">
                                <Link
                                    href={
                                        'https://www.linkedin.com/in/chengtchris/'
                                    }
                                >
                                    <FaLinkedin className="mx-2" />
                                </Link>
                                <Link href={'https://github.com/chengtchris1'}>
                                    <LuGithub className="mx-2" />
                                </Link>
                            </div>
                        </Container>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
