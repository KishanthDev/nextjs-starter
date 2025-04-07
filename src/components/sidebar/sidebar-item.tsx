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

export const SidebarItem = ({ icon, title, isActive, href = '' }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
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
            gap-4
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
          {icon}
          <span className="text-foreground text-base font-normal">
            {title}
          </span>
        </Flex>
      </Link>
    </NextLink>
  );
};