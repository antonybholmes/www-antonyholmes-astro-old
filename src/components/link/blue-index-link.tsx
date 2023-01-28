import type IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import ArrowLink from "./arrow-link"

export interface IIndexLinkProps extends IUnderlineLinkProps {}

export default function BlueArrowLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IIndexLinkProps) {
  return (
    <ArrowLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("stroke-blue-600 text-blue-600", className)}
    >
      {children}
    </ArrowLink>
  )
}
