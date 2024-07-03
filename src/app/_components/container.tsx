import { cn } from '@/lib/utils';
type Props = {
    children?: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    return (
        <div className={cn("container mx-auto px-4 sm:px-8 lg:px-16", className)}>
            {children}
        </div>
    );
};

export default Container;
