import React, { FC, ReactElement } from 'react';
import { Layout } from '../baseComponents/Layout';
import { Button } from '../baseComponents/Button';
import { ItemsShowcase } from '../baseComponents/ItemsShowcase';
import { PanelShowcase } from '../baseComponents/PanelShowcase';
import { TrustBar } from '../baseComponents/TrustBar';
import { UserList } from '../UserList';
import { Cards } from '../baseComponents/Cards';
import { Hero } from '../baseComponents/Hero';

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
