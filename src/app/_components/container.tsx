type Props = {
    children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className="container mx-auto px-4 sm:px-8 lg:px-32">{children}</div>;
};

export default Container;
