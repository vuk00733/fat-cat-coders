import { UserListProps } from '@components/UserList';
import { ButtonProps } from '@components/baseComponents/Button';
import { CardsProps } from '@components/baseComponents/Cards';
import { HeroProps } from '@components/baseComponents/Hero';
import { ItemsShowcaseProps } from '@components/baseComponents/ItemsShowcase';
import { LayoutProps } from '@components/baseComponents/Layout';
import { PanelShowcaseProps } from '@components/baseComponents/PanelShowcase';
import { TrustBarProps } from '@components/baseComponents/TrustBar';

export type ComponentType =
    | 'layoutSection'
    | 'componentButton'
    | 'componentHero'
    | 'componentCards'
    | 'componentItemsShowcase'
    | 'componentPanelShowcase'
    | 'componentTrustBar'
    | 'componentUserList';

export type ComponentProps =
    | CardsProps
    | ButtonProps
    | HeroProps
    | ItemsShowcaseProps
    | LayoutProps
    | PanelShowcaseProps
    | TrustBarProps
    | UserListProps;

export interface Component {
    type: ComponentType;
    props: ComponentProps;
    components?: Array<Component>;
}
