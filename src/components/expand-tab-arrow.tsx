import { useState, useRef } from "preact/hooks"
import ChevronUpIcon from "../icons/chevron-up"
import cn from "../lib/class-names"

const CLASSES = `flex flex-row w-4 h-4 items-center justify-center`

interface IProps {
  expanded: boolean
  hover?: boolean
}

const ExpandTabArrow = ({ expanded, hover = false }: IProps) => {
  const [_hover, _setHover] = useState(false)
  const arrowEl = useRef(null)

  return (
    <div ref={arrowEl} className={CLASSES}>
      <ChevronUpIcon //{isExpanded ? "chevron-up" : "chevron-down"}
        className={cn(
          `transition-ani w-4 stroke-2 transition-all`,
          [expanded, "rotate-180", "rotate-0"],
          [hover, "stroke-gray-900", "stroke-slate-400"]
        )}
      />
    </div>
  )
}

export default ExpandTabArrow
