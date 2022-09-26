/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
interface NavigationItemProps {
  onClick?: () => void;
  isMenu?: boolean;
  children: React.ReactNode;
}
export const NavigationItem = ({
  onClick,
  isMenu,
  children,
}: NavigationItemProps) => {
  if (isMenu) {
    return <ul className="nav-submenu">{children}</ul>;
  }
  return (
    <li className="nav-item" onClick={onClick}>
      {children}
    </li>
  );
};
