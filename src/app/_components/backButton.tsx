'use client';
import { useRouter } from 'next/navigation';
import { IoReturnDownBackOutline } from 'react-icons/io5';
export default function BackButton() {
    const router = useRouter();

    return (
        <button
            className="border flex w-32 p-1 rounded-2xl items-center justify-evenly text-lg"
            onClick={() => router.back()}
        >
            <span className="text-2xl">
                <IoReturnDownBackOutline />
            </span>
            Go back
        </button>
    );
}
