import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export function PostTitle({ children }: Props) {
    return (
        <h1 className="mb-0 text-center text-5xl font-bold leading-tight tracking-tighter md:mb-6 md:text-left md:text-7xl md:leading-none lg:text-8xl">
            {children}
        </h1>
    );
}
