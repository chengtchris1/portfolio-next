'use client';
import { useRouter } from 'next/navigation';
import { FaChevronCircleLeft } from "react-icons/fa";
export default function BackButton() {
    const router = useRouter();

    return (
        <button
            className="border flex w-[6.5rem] md:w-32 p-1 rounded-2xl items-center justify-evenly text-sm md:text-lg hover:bg-white hover:text-black transition duration-300"
            onClick={() => router.back()}
        >
            <span className="text-sm">
                <FaChevronCircleLeft />
            </span>
            Go back
        </button>
    );
}
