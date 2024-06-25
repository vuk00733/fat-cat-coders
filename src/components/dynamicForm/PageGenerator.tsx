import React from 'react';
import DynamicPage from './DynamicPage';

const data = [
    {
        type: 'layoutSection',
        props: { backgroundColor: '#941d1d' },
        components: [
            {
                type: 'componentButton',
                props: {
                    children: 'Click Me',
                    onClick: () => {
                        alert('Button clicked!');
                    },
                },
            },
            {
                type: 'componentButton',
                props: {
                    children: 'Click Me',
                    onClick: () => {
                        alert('Button clicked!');
                    },
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: '#3b1daa' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Transfer the project to TypeScript',
                    image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                },
            },
        ],
    },
];

const PageGenerator: React.FC = () => {
    return (
        <div>
            <DynamicPage data={data} />
        </div>
    );
};

export default PageGenerator;
