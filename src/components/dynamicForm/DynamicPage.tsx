import React, { FC, ReactElement } from 'react';
import ComponentRenderer from './ComponentRenderer';
import { Component } from '../../types/dynamicForm';

interface DynamicPageProps {
    data: Array<Component>;
}

const DynamicPage: FC<DynamicPageProps> = ({ data }): ReactElement => {
    return (
        <div className="mt-5">
            {data.map((section, index) => (
                <div key={index} className={`section ${section.type}`}>
                    <ComponentRenderer
                        type={section.type}
                        props={section.props}
                        components={section.components}
                    />
                </div>
            ))}
        </div>
    );
};

export default DynamicPage;
