'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

export const FlipWords = ({
    words,
    duration = 3000,
    className,
    isPaused,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // thanks for the fix Julian - https://github.com/Julian-AT
    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words, isPaused]);

    useEffect(() => {
        if (!isPaused && !isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: 'blur(8px)',
                    scale: 2,
                    position: 'absolute',
                }}
                className={cn(
                    'z-10 inline-block relative text-left text-transparent dark:text-neutral-100 px-2',
                    className
                )}
                key={currentWord}
            >
                {currentWord.split('').map((letter, index) => (
                    <motion.span
                        key={currentWord + index}
                        initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                        }}
                        className="inline-block mix-blend-overlay bg-gradient-to-b from-teal-400/95 to-indigo-500/95 pr-1 bg-clip-text not-italic"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
