'use client';
import { BackgroundGradientAnimation } from '../_components/animatedGradient';
export default function Page() {
    return (
        <BackgroundGradientAnimation size="50%">
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl">
                <p className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl">
                    Gradients X<br />
                    Animations
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}
