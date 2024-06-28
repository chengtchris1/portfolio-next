'use client';
import { useRouter } from 'next/navigation';
import { IoReturnDownBackOutline } from 'react-icons/io5';
export default function BackButton() {
    const router = useRouter();

    return (
        <button
            className="border flex w-[6.5rem] md:w-32 p-0 rounded-2xl items-center justify-evenly text-sm md:text-lg hover:bg-white hover:text-black transition duration-300"
            onClick={() => router.back()}
        >
            <span className="text-2xl">
                <IoReturnDownBackOutline />
            </span>
            Go back
        </button>
    );
}
