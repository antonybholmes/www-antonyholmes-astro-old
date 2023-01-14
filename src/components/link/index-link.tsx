import { useRef, useState } from "preact/hooks"
import ChevronRightIcon from "../../icons/chevron-right"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

const IndexLink = ({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) => {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       iconEl.current,
  //       { x: hover ? '0.15rem' : 0, ease: 'power3.out', duration: 0.2 },
  //       0
  //     )
  // }, [hover])

  const _onMouseEnter = (e: any) => {
    setHover(true)
  }

  const _onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
      underline={underline}
      className={cn("flex flex-row gap-x-1", className)}
    >
      {children}

      <div ref={iconEl}>
        <ChevronRightIcon
          className={cn("h-full w-3 transition-transform duration-200", [
            hover,
            "translate-x-1",
            "translate-x-0",
          ])}
        />
      </div>
    </BaseLink>
  )
}

export default IndexLink
