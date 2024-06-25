import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
