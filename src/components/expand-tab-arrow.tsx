import { gsap } from "gsap"
import { useEffect, useRef } from "preact/hooks"
import { ANIMATION_DURATION_S } from "../constants"
import cn from "../lib/class-names"

interface IProps {
  isExpanded: boolean
  hover?: boolean
}

const Y1 = 11
const Y2 = 5

export default function ExpandTabArrow({ isExpanded, hover = false }: IProps) {
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  useEffect(() => {
    const y1 = isExpanded ? Y2 : Y1
    const y2 = isExpanded ? Y1 : Y2
    // @ts-ignore
    gsap
      .timeline()
      .to(
        ref1.current,
        {
          duration: ANIMATION_DURATION_S,
          attr: { y1: y1, y2: y2 },
        },
        0
      )
      .to(
        ref2.current,
        {
          duration: ANIMATION_DURATION_S,
          attr: { y1: y2, y2: y1 },
        },
        0
      )
  }, [isExpanded])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={cn(
        "trans-300 w-4 shrink-0 stroke-slate-400  stroke-2 group-hover:stroke-slate-900 dark:group-hover:stroke-white"
      )}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      {/* <path d="M 0,8 L 16,8" /> */}
      <line ref={ref1} x1="2" y1="11" x2="8" y2="5" />
      <line ref={ref2} x1="8" y1="5" x2="14" y2="11" />
    </svg>
  )
}

// export default function ExpandTabArrow({ isExpanded, hover = false }: IProps) {
//   return (
//     <ChevronRightIcon
//       className={cn(
//         "trans-300 w-3 shrink-0 stroke-slate-400 stroke-2 transition-all group-hover:stroke-slate-900",
//         [isExpanded, "rotate-90"]
//       )}
//     />
//   )
// }
