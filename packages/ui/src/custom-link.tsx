import { clsx } from 'clsx';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: () => void;
  children: ReactNode;
}

// Applied React.forwardRef for using within the teg Link from Next
const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ onClick, href, className, children, ...rest }, ref) => (
    <a
      className={clsx('', className)}
      href={href}
      onClick={onClick}
      ref={ref}
      {...rest}
    >
      {children}
    </a>
  ),
);

CustomLink.displayName = 'ButtonRoute';
export { CustomLink };
