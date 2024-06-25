import React, { FC, ReactElement } from 'react';
import ComponentRenderer from './ComponentRenderer';

interface ComponentProps {
    type: string;
    props: any;
}

interface SectionProps {
    type: string;
    props: any;
    components?: ComponentProps[];
}

interface DynamicPageProps {
    data: SectionProps[];
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
