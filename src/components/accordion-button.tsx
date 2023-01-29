import { useState } from "preact/hooks"
import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"
import ExpandTabArrow from "./expand-tab-arrow"
import AnchorButton, { IButtonProps } from "./link/anchor-button"

interface IProps extends IButtonProps {
  isExpanded?: boolean
}

export default function AccordionButton({
  isExpanded = false,
  onClick,
  ariaLabel,
  className,
  children,
}: IProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  return (
    <AnchorButton
      onClick={onClick}
      className={cn(
        "trans-300 transition-color group flex cursor-pointer flex-row items-center justify-between gap-x-2 px-4 py-2 font-semibold hover:bg-slate-100",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ariaLabel={ariaLabel}
    >
      <div>{children}</div>
      <ExpandTabArrow isExpanded={isExpanded} hover={hover} />
    </AnchorButton>
  )
}
