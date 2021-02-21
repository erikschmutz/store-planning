import { ReactNode } from 'react';

interface BadgeInput {
    children: ReactNode;
    onClick: () => void;
}

export default function Badge(props: BadgeInput) {
    const { children, onClick } = props;
    return (
        <div
            onClick={onClick}
            className="text-sm text-center rounded-full cursor-pointer w-5 h-5 bg-white hover:bg-red-500 border absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2"
        >
            {children}
        </div>
    );
}
