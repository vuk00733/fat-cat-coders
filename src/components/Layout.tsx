import React from 'react';
import clsx from 'clsx';

export interface LayoutProps {
    children: React.ReactNode;
    background: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return (
        <section className={clsx('py-20', `bg-${background}`)}>
            {children}
        </section>
    );
};
