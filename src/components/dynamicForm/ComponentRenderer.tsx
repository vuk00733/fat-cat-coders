import React, { FC, ReactElement } from 'react';
import { Hero, HeroProps } from '@components/baseComponents/Hero';
import { UserList, UserListProps } from '@components/UserList';
import { Button, ButtonProps } from '@components/baseComponents/Button';
import { Cards, CardsProps } from '@components/baseComponents/Cards';
import {
    ItemsShowcase,
    ItemsShowcaseProps,
} from '@components/baseComponents/ItemsShowcase';
import { Layout, LayoutProps } from '@components/baseComponents/Layout';
import {
    PanelShowcase,
    PanelShowcaseProps,
} from '@components/baseComponents/PanelShowcase';
import { TrustBar, TrustBarProps } from '@components/baseComponents/TrustBar';
import { Component } from '@type/dynamicForm';

const ComponentRenderer: FC<Component> = ({
    type,
    props,
    components,
}): ReactElement | null => {
    try {
        switch (type) {
            case 'layoutSection':
                return (
                    <Layout {...(props as LayoutProps)}>
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
                return <Button {...(props as ButtonProps)} />;
            case 'componentHero':
                return <Hero {...(props as HeroProps)} />;
            case 'componentCards':
                return <Cards {...(props as CardsProps)} />;
            case 'componentItemsShowcase':
                return <ItemsShowcase {...(props as ItemsShowcaseProps)} />;
            case 'componentPanelShowcase':
                return <PanelShowcase {...(props as PanelShowcaseProps)} />;
            case 'componentTrustBar':
                return <TrustBar {...(props as TrustBarProps)} />;
            case 'componentUserList':
                return <UserList {...(props as UserListProps)} />;
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
