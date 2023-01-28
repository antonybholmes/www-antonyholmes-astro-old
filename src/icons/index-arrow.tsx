import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

const W = 12
const Y = 6

export default function IndexArrow({ className }: IClassProps) {
  //const lineRef = useRef(null)
  //const arrowRef = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       arrowRef.current,
  //       {
  //         x: selected ? "2px" : 0,
  //         duration: DURATION,
  //       },
  //       0
  //     )
  //     .to(
  //       lineRef.current,
  //       {
  //         scaleX: selected ? 1 : 0,
  //         opacity: selected ? 1 : 0,
  //         duration: DURATION,
  //       },
  //       0
  //     )
  // }, [selected])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${W} ${W}`}
      class={cn(className)}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <line
        x1="4"
        y1={Y}
        x2="9"
        y2={Y}
        class="trans-300 opacity-0 transition-opacity group-hover:opacity-100"
      />
      <path
        d={`M 6,3 L 9,${Y} L 6,9`}
        class="trans-300 transition-transform group-hover:translate-x-[2px]"
      />
    </svg>
  )
}
