import IFocusProps from "../../interfaces/focus-props"
import ILinkProps from "../../interfaces/link-props"
import IMouseProps from "../../interfaces/mouse-props"
import cn from "../../lib/class-names"
import ExtLink from "./ext-link"

interface IProps extends ILinkProps, IMouseProps, IFocusProps {
  underline?: boolean
}

const BaseLink = ({
  href,
  target = "_blank",
  ariaLabel,
  underline = false,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  onMouseDown,
  onFocus,
  onBlur,
  children,
}: IProps) => {
  if (!ariaLabel) {
    ariaLabel = `Click to visit ${href}`
  }

  // Test if we use the NextJS router link or a regular a for external urls
  const isExt = href && (href.startsWith("http") || href.startsWith("www"))

  if (isExt) {
    return (
      <ExtLink
        href={href}
        ariaLabel={ariaLabel}
        className={className}
        underline={underline}
        target={target}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </ExtLink>
    )
  } else {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cn("m-0 p-0", [underline, `hover:underline`], className)}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </a>
    )
  }
}

export default BaseLink
