import { ButtonProps } from '../components/Button';
import { CardsProps } from '../components/Cards';
import { HeroProps } from '../components/Hero';
import { ItemsShowcaseProps } from '../components/ItemsShowcase';
import { LayoutProps } from '../components/Layout';
import { PanelShowcaseProps } from '../components/PanelShowcase';
import { TrustBarProps } from '../components/TrustBar';
import { UserListProps } from '../components/UserList';

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
