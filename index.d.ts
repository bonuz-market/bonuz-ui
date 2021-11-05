import { ReactNode, FC, PropsWithChildren, ReactElement } from 'react';

declare module '@bonuz/bonuz-ui' {
  type ButtonProps = PropsWithChildren<{
    outline?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
  }>;
  type ActionButtonProps = {
    type: 'left' | 'right';
    className?: string;
    style?: {
      [key: string]: string;
    };
    onClick?: () => void;
  };
  type AdvantagesItemProps = {
    title: string;
    description: string;
    icon: string;
    iconBlur: string;
  };
  type CelebritiesItemProps = {
    img: string;
    name: string;
    country: string;
  };
  type CheckboxProps = {
    label: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
  };
  type HowItWorksItemProps = {
    img: string;
    title: string;
    circleOffset: number;
  };
  type InfoBlockProps = PropsWithChildren<{
    size?: 'small' | 'large';
    secondColumn?: ReactNode;
  }>;
  type InputProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    actionButton?: ReactNode;
    withDefaultActionButton?: boolean;
    defaultActionButtonLabel?: string;
    mobileColumn?: boolean;
    onChange?: (value: string) => void;
  };
  type NewsCardProps = {
    created: string;
    img: string;
    title: string;
    description: string;
  };
  type RoadMapItemProps = {
    title: string;
    description: string;
  };
  type StatElementProps = {
    img: string;
    title: string;
    description: string;
  };
  type TeamCardProps = {
    img: string;
    name: string;
    position: string;
  };
  type TextBlockProps = PropsWithChildren<{
    type?: 'primary' | 'secondary';
    size?: 'small' | 'large';
    title?: string;
    mobileColumn?: boolean;
  }>;
  type AdvantagesListProps = {
    items: {
      title: string;
      description: string;
      icon: string;
      iconBlur: string;
    }[];
  };
  type CelebritiesListProps = {
    celebrities: {
      img: string;
      name: string;
      country: string;
    }[];
  };
  type HowItWorksListProps = {
    items: {
      img: string;
      title: string;
      circleOffset: number;
    }[];
  };
  type NewsRowProps = {
    news: {
      created: string;
      img: string;
      title: string;
      description: string;
    }[];
  };
  type PartnersListProps = {
    partners: Array<string>;
  };
  type RoadMapListProps = {
    items: {
      title: string;
      description: string;
    }[];
  };
  type TeamListProps = {
    items: {
      img: string;
      name: string;
      position: string;
    }[];
  };
  type TabProps = {
    title: string;
  };
  type TabTitleProps = PropsWithChildren<{
    title: string;
    type?: 'primary' | 'secondary';
    isActive: boolean;
    onClick: () => void;
  }>;
  type TabsProps = {
    type?: 'primary' | 'secondary';
    children: ReactElement<TabProps>[] | ReactElement<TabProps>;
  };

  export const Button: FC<ButtonProps>;
  export const ActionButton: FC<ActionButtonProps>;
  export const AdvantagesItem: FC<AdvantagesItemProps>;
  export const CelebritiesItem: FC<CelebritiesItemProps>;
  export const Checkbox: FC<CheckboxProps>;
  export const HowItWorksItem: FC<HowItWorksItemProps>;
  export const InfoBlock: FC<InfoBlockProps>;
  export const Input: FC<InputProps>;
  export const Navigation: FC;
  export const NewsCard: FC<NewsCardProps>;
  export const RoadMapItem: FC<RoadMapItemProps>;
  export const StatElement: FC<StatElementProps>;
  export const SubscribeToNews: FC;
  export const TeamCard: FC<TeamCardProps>;
  export const TextBlock: FC<TextBlockProps>;
  export const AdvantagesList: FC<AdvantagesListProps>;
  export const CelebritiesList: FC<CelebritiesListProps>;
  export const Footer: FC;
  export const Header: FC;
  export const HowItWorksList: FC<HowItWorksListProps>;
  export const NewsRow: FC<NewsRowProps>;
  export const PartnersList: FC<PartnersListProps>;
  export const RoadMapList: FC<RoadMapListProps>;
  export const TeamList: FC<TeamListProps>;
  export const Title: FC;
  export const Subtitle: FC;
  export const Tab: FC<TabProps>;
  export const TabTitle: FC<TabTitleProps>;
  export const Tabs: FC<TabsProps>;
}
