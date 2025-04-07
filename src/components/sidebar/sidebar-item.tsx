import { Link } from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react';
import { useSidebarContext } from '../layout/layout-context';
import { Flex } from '../styles/flex';

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href ='#' }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };

  // Helper function to safely add className to icon
  const renderIcon = () => {
    if (React.isValidElement<{ className?: string }>(icon)) {
      const iconProps = {
        ...icon.props,
        className: `${icon.props.className || ''} w-5 h-5`,
      };
      return React.cloneElement(icon, iconProps);
    }
    return <span className="w-5 h-5 flex items-center justify-center">{icon}</span>;
  };

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        as="div"
        color="foreground"
        className="w-full max-w-full"
      >
        <Flex
          onClick={handleClick}
          className={`
            gap-3
            w-full
            min-h-[44px]
            h-full
            items-center
            px-4
            rounded-lg
            cursor-pointer
            transition-all
            duration-150
            ease-in
            active:scale-[0.98]
            ${isActive
              ? 'bg-primary-100 [&>svg]:text-primary-600'
              : 'hover:bg-default-100'}
          `}
          align="center"
        >
          <span className="flex items-center justify-center">
            {renderIcon()}
          </span>
          <span className="text-foreground text-base font-normal">
            {title}
          </span>
        </Flex>
      </Link>
    </NextLink>
  );
};