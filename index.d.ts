import { ReactNode, FC, PropsWithChildren, ReactElement } from 'react';
import { ColorResult } from 'react-color';
import { SwiperProps } from 'swiper/react';

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
    /**
     * Must be used with category prop
     */
    link?: string;
    /**
     * Must be used with link prop
     */
    category?: string;
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
    type?: string;
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
    link?: string;
    rounded?: boolean;
    centered?: boolean;
  };
  type TextBlockProps = PropsWithChildren<{
    type?: 'primary' | 'secondary';
    size?: 'small' | 'large';
    title?: string;
    mobileColumn?: boolean;
  }>;
  type StatusTextProps = {
    message: string;
    type: 'success' | 'error' | 'warning' | '';
    alwaysVisible?: boolean;
    timeout?: number;
  };
  type AdvantagesListProps = {
    items: AdvantagesItemProps[];
    options?: SwiperProps;
  };
  type CelebritiesListProps = {
    items: CelebritiesItemProps[];
    options?: SwiperProps;
  };
  type HowItWorksListProps = {
    items: HowItWorksItemProps[];
    options?: SwiperProps;
  };
  type GalleryProps = {
    items: { image: string; link?: string; alt?: string }[];
  };
  type RoadMapListProps = {
    items: RoadMapItemProps[];
    options?: SwiperProps;
  };
  type TeamListProps = {
    items: TeamCardProps[];
    rounded?: boolean;
    centered?: boolean;
    options?: SwiperProps;
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
      value: string;
      onChange: (value: string) => void;
      onSubmit: () => void;
      statusTextOptions?: StatusTextProps;
    };
    socialMediaLinks: SocialListProps;
    statusTextOptions?: StatusTextProps;
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
  type HeaderSecondaryProps = {
    logo?: string;
    navText?: string;
    title: string;
    description?: string;
  };
  type FooterSecondaryProps = {
    logo?: string;
    description?: string;
    socialMediaLinks?: SocialListProps;
  };
  type ModalProps = {
    closeText?: string;
    footerText?: string;
    video?: boolean;
  };
  export const Button: FC<ButtonProps>;
  export const ActionButton: FC<ActionButtonProps>;
  export const AdvantagesItem: FC<AdvantagesItemProps>;
  export const CelebritiesItem: FC<CelebritiesItemProps>;
  export const CalendarItem: FC<CalendarItemProps>;
  export const Checkbox: FC<CheckboxProps>;
  export const Dropdown: FC<DropdownProps>;
  export const HowItWorksItem: FC<HowItWorksItemProps>;
  export const InfoBlock: FC<InfoBlockProps>;
  export const Input: FC<InputProps>;
  export const Modal: FC<ModalProps>;
  export const Navigation: FC;
  export const NewsCard: FC<NewsCardProps>;
  export const RoadMapItem: FC<RoadMapItemProps>;
  export const StatElement: FC<StatElementProps>;
  export const FormArrowButton: FC<FormArrowButtonProps>;
  export const TeamCard: FC<TeamCardProps>;
  export const TextBlock: FC<TextBlockProps>;
  export const StatusText: FC<StatusTextProps>;
  export const AdvantagesList: FC<AdvantagesListProps>;
  export const CelebritiesList: FC<CelebritiesListProps>;
  export const Footer: FC<FooterProps>;
  export const Header: FC<HeaderProps>;
  export const FooterSecondary: FC<FooterSecondaryProps>;
  export const HeaderSecondary: FC<HeaderSecondaryProps>;
  export const HowItWorksList: FC<HowItWorksListProps>;
  export const Gallery: FC<GalleryProps>;
  export const RoadMapList: FC<RoadMapListProps>;
  export const TeamList: FC<TeamListProps>;
  export const Title: FC;
  export const Subtitle: FC;
  export const SocialList: FC<SocialListProps>;
  export const Tab: FC<TabProps>;
  export const TabTitle: FC<TabTitleProps>;
  export const Tabs: FC<TabsProps>;
  export const TabsSecondary: FC;
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
