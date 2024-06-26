import React from 'react';
import DynamicPage from './DynamicPage';
import { Component } from '@type/dynamicForm';

const data = [
    {
        type: 'layoutSection',
        props: { background: 'mainRed' },
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
                type: 'componentTrustBar',
                props: {
                    images: [
                        'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    ],
                },
            },
        ],
    },

    {
        type: 'componentHero',
        props: {
            title: 'Hero title',
            image: [
                'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
        },
    },
];

const PageGenerator: React.FC = () => {
    return (
        <React.Fragment>
            <DynamicPage data={data as Array<Component>} />
        </React.Fragment>
    );
};

export default PageGenerator;
