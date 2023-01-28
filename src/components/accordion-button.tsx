import { useState } from "preact/hooks"
import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"
import ExpandTabArrow from "./expand-tab-arrow"
import AnchorButton from "./link/anchor-button"

interface IProps extends IChildrenProps {
  isExpanded?: boolean
  onClick?: (e: MouseEvent) => void
}

export default function AccordionButton({
  isExpanded = false,
  onClick,
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
        "trans-ani-300 transition-color flex cursor-pointer flex-row items-center justify-between gap-x-2 rounded-md px-4 py-2 font-semibold hover:bg-slate-100",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{children}</div>
      <ExpandTabArrow expanded={isExpanded} hover={hover} />
    </AnchorButton>
  )
}
