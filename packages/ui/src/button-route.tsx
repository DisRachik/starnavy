import { clsx } from 'clsx';
import React, { forwardRef, type ReactNode } from 'react';

interface ButtonRouteProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children: ReactNode;
}

const ButtonRoute = forwardRef<HTMLAnchorElement, ButtonRouteProps>(
  ({ onClick, href, className, children, ...rest }, ref) => (
    <a
      className={clsx('', className)}
      href={href}
      onClick={onClick}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      {...rest}
    >
      {children}
    </a>
  ),
);

ButtonRoute.displayName = 'ButtonRoute';
export { ButtonRoute };
