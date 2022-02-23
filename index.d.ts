import { ReactNode, FC, PropsWithChildren, ReactElement } from 'react';
import { ColorResult } from 'react-color';

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
    icon: any;
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
  type DropdownProps = {
    selected?: string;
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
    secondary?: boolean;
    placeholder?: string;
    icon?: ReactNode;
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
    link: string;
  };
  type RoadMapItemProps = {
    title: string;
    description: string;
  };
  type StatElementProps = {
    title: string;
    description: string;
    colorHex: string;
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
      icon: any;
    }[];
    rtl?: boolean;
  };
  type CelebritiesListProps = {
    celebrities: {
      img: string;
      name: string;
      country: string;
    }[];
    rtl?: boolean;
  };
  type HowItWorksListProps = {
    items: {
      img: string;
      title: string;
      circleOffset: number;
    }[];
    rtl?: boolean;
  };
  type NewsRowProps = {
    news: {
      created: string;
      img: string;
      title: string;
      description: string;
      link: string;
    }[];
    rtl?: boolean;
  };
  type PartnersListProps = {
    partners: Array<string>;
    rtl?: boolean;
  };
  type RoadMapListProps = {
    items: {
      title: string;
      description: string;
    }[];
    rtl?: boolean;
  };
  type TeamListProps = {
    items: {
      img: string;
      name: string;
      position: string;
    }[];
    rtl?: boolean;
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
  type FanItemProps = {
    avatar: string;
    name: string;
    description: string;
    viewers: number;
  };
  type Column = {
    title: string;
    key: string;
  };

  type TableProps = {
    columns: Column[];
    data: {
      [key: string]: string;
    }[];
    selectable?: boolean;
    actionButton?: ReactNode;
    onClick?: (index: number) => void;
  };
  type CreatorNewsCardProps = {
    img: string;
    title: string;
    description: string;
    tag: string;
    created: string;
    type?: 'main' | 'default';
  };
  type ColorPickerProps = {
    onChange?: (color: ColorResult) => void;
  };
  type FaqItemProps = {
    title: string;
    description: string;
  };
  type FansListProps = {
    t: (key: string) => string;
    fans: FanItemProps[];
  };
  type MediaProps = {
    img: string;
    title: string;
    viewers: number;
    watermark: string;
    created: string;
    shortLink: string;
    city: string;
    t: (key: string) => string;
    meta: {
      shortcode: string;
      url: string;
    };
  };
  type UserCardProps = {
    photo: string;
    shortLink: string;
    created: string;
    addresses: {
      address: string;
      coins: number;
    }[];
    info: {
      firstName: string;
      lastName: string;
    };
    t: (key: string) => string;
  };
  type UsersProps = {
    t: (key: string) => string;
    users: {
      name: string;
      coins: number;
      level: string;
    }[];
  };
  type LanguageSelectorProps = {
    options: { label: string; target: string }[];
  };
  type HeaderProps = {
    LanguageSelector?: ReactElement<LanguageSelectorProps>;
    NavigationElements: ReactElement[];
    SignInElement?: ReactElement;
    logoUrl: string;
    logoHoverUrl?: string;
  };

  type FooterProps = {
    logo: React.ReactElement;
    navigation: { title: string; NavigationElements: React.ReactElement[] };
    sideText: string;
    buttons?: { text: string; outline?: boolean; link?: string }[];
    privacyPolicy?: { text: string; link: string };
    newsletterForm: {
      label: string;
      placeholderText: string;
      onSubmit: () => void;
    };
    socialMediaLinks: SocialListProps;
  };
  type FormArrowButtonProps = {
    onClick: () => void;
  };
  type SocialListProps = {
    telegram?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    medium?: string;
    telegramMessage?: string;
  };
  type CalendarItemProps = {
    title: string;
    date?: string;
    location?: string;
    link?: string;
  };
  export const Button: FC<ButtonProps>;
  export const ActionButton: FC<ActionButtonProps>;
  export const AdvantagesItem: FC<AdvantagesItemProps>;
  export const CelebritiesItem: FC<CelebritiesItemProps>;
  export const Checkbox: FC<CheckboxProps>;
  export const Dropdown: FC<DropdownProps>;
  export const HowItWorksItem: FC<HowItWorksItemProps>;
  export const InfoBlock: FC<InfoBlockProps>;
  export const Input: FC<InputProps>;
  export const Navigation: FC;
  export const NewsCard: FC<NewsCardProps>;
  export const RoadMapItem: FC<RoadMapItemProps>;
  export const StatElement: FC<StatElementProps>;
  export const FormArrowButton: FC<FormArrowButtonProps>;
  export const TeamCard: FC<TeamCardProps>;
  export const TextBlock: FC<TextBlockProps>;
  export const AdvantagesList: FC<AdvantagesListProps>;
  export const CelebritiesList: FC<CelebritiesListProps>;
  export const Footer: FC<FooterProps>;
  export const Header: FC<HeaderProps>;
  export const HowItWorksList: FC<HowItWorksListProps>;
  export const NewsRow: FC<NewsRowProps>;
  export const PartnersList: FC<PartnersListProps>;
  export const RoadMapList: FC<RoadMapListProps>;
  export const TeamList: FC<TeamListProps>;
  export const Title: FC;
  export const Subtitle: FC;
  export const SocialList: FC<SocialListProps>;
  export const Tab: FC<TabProps>;
  export const TabTitle: FC<TabTitleProps>;
  export const Tabs: FC<TabsProps>;
  export const FanItem: FC<FanItemProps>;
  export const Table: FC<TableProps>;
  export const CreatorNewsCard: FC<CreatorNewsCardProps>;
  export const ColorPicker: FC<ColorPickerProps>;
  export const FaqItem: FC<FaqItemProps>;
  export const FansList: FC<FansListProps>;
  export const Media: FC<MediaProps>;
  export const UserCard: FC<UserCardProps>;
  export const Users: FC<UsersProps>;
}
