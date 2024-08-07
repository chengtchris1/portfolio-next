'use client';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FaChevronCircleLeft } from 'react-icons/fa';
export default function BackButton({ className }: { className?: string }) {
    const router = useRouter();

    return (
        <button
            className={cn(
                'border ml-4 sm:-ml-8 flex w-[6.5rem] md:w-32 p-1 rounded-2xl items-center justify-evenly text-sm md:text-lg hover:bg-white hover:text-black transition duration-300 font-bold',
                className
            )}
            onClick={() => router.back()}
        >
            <span className="text-sm">
                <FaChevronCircleLeft />
            </span>
            Go back
        </button>
    );
}
