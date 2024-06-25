import React, { FC, ReactElement } from 'react';
import { Layout } from '../Layout';
import { Button } from '../Button';
import { Hero } from '../Hero';
import { Cards } from '../Cards';
import { ItemsShowcase } from '../ItemsShowcase';
import { PanelShowcase } from '../PanelShowcase';
import { TrustBar } from '../TrustBar';
import { UserList } from '../UserList';

interface ComponentRendererProps {
    type: string;
    props: any;
}

const ComponentRenderer: FC<ComponentRendererProps> = ({
    type,
    props,
}): ReactElement | null => {
    try {
        switch (type) {
            case 'layoutSection':
                return <Layout {...props} />;
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
