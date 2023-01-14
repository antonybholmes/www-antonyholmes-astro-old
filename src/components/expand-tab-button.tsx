import { useState } from "preact/hooks"
import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"
import ExpandTabArrow from "./expand-tab-arrow"
import AnchorButton from "./link/anchor-button"

interface IProps extends IChildrenProps {
  expanded?: boolean
  onClick?: (e: MouseEvent) => void
}

export default function ExpandTabButton({
  expanded = false,
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
        "transition-color -mx-3 flex cursor-pointer flex-row items-center justify-between gap-x-2 rounded py-1 px-3 font-bold transition hover:bg-slate-100",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{children}</div>
      <ExpandTabArrow expanded={expanded} hover={hover} />
    </AnchorButton>
  )
}
