import React, { FC, ReactElement } from 'react';
import { Hero } from '@components/baseComponents/Hero';
import { Layout } from '@components/baseComponents/Layout';
import { Button } from '@components/baseComponents/Button';
import { Cards } from '@components/baseComponents/Cards';
import { ItemsShowcase } from '@components/baseComponents/ItemsShowcase';
import { PanelShowcase } from '@components/baseComponents/PanelShowcase';
import { TrustBar } from '@components/baseComponents/TrustBar';
import { UserList } from '@components/UserList';

interface ComponentRendererProps {
    type: string;
    props: any;
    components?: ComponentProps[];
}

interface ComponentProps {
    type: string;
    props: any;
    components?: ComponentProps[];
}

const ComponentRenderer: FC<ComponentRendererProps> = ({
    type,
    props,
    components,
}): ReactElement | null => {
    try {
        switch (type) {
            case 'layoutSection':
                return (
                    <Layout {...props}>
                        {components?.map((component, idx) => (
                            <ComponentRenderer
                                key={idx}
                                type={component.type}
                                props={component.props}
                                components={component.components}
                            />
                        ))}
                    </Layout>
                );
            case 'componentButton':
                return <Button {...props} />;
            case 'componentHero':
                return <Hero {...props} />;
            case 'componentCards':
                return <Cards {...props} />;
            case 'componentItemsShowcase':
                return <ItemsShowcase {...props} />;
            case 'componentPanelShowcase':
                return <PanelShowcase {...props} />;
            case 'componentTrustBar':
                return <TrustBar {...props} />;
            case 'componentUserList':
                return <UserList {...props} />;
            default:
                console.warn(`Unsupported component type: ${type}`);
                return null;
        }
    } catch (error) {
        console.error(`Failed to render component of type "${type}"`, error);
        return null;
    }
};

export default ComponentRenderer;
