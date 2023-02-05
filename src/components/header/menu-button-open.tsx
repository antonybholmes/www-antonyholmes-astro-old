import { gsap } from "gsap"
import { useEffect, useRef } from "preact/hooks"
import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import BaseButton from "../link/base-button"
import IMenuProps from "./menu-props"

const DURATION = 0.1

const X1 = 0
const X2 = 16
const Y1 = 4
const Y2 = 8
const Y3 = 12

export interface IMenuButtonProps extends IMenuProps, IClassProps {
  showMenu: boolean
  headerMode?: string
}

export default function MenuButtonOpen({
  showMenu,
  headerMode = "light",
  onClick,
  className,
  style,
}: IMenuButtonProps) {
  //const [focus, setFocus] = useState(false)
  //const [hover, setHover] = useState(false)

  //const t1 = useRef(null)
  //const t2 = useRef(null)

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  // useEffect(() => {
  //   // @ts-ignore
  //   t1.current = gsap
  //     .timeline({ paused: true })
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         top: '2rem',
  //       },
  //       0
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: DURATION,
  //         top: '2rem',
  //       },
  //       0
  //     )
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         rotate: 45,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: DURATION,
  //         rotate: -45,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )

  //   // @ts-ignore
  //   t2.current = gsap
  //     .timeline({ paused: true })
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         rotate: 0,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: DURATION,
  //         rotate: 0,
  //         transformOrigin: '50% 50%',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl1.current,
  //       {
  //         duration: DURATION,
  //         top: '1.75rem',
  //       },
  //       DURATION
  //     )
  //     .to(
  //       refl3.current,
  //       {
  //         duration: 4,
  //         top: '2.25rem',
  //       },
  //       DURATION
  //     )
  // }, [])

  // useEffect(() => {

  //   if (isFirstRun.current) {
  //     isFirstRun.current = 2;
  //   }
  // }, [])

  useEffect(() => {
    if (showMenu) {
      // @ts-ignore
      gsap
        .timeline()
        .to(
          ref1.current,
          {
            duration: DURATION,
            attr: { y1: Y2, y2: Y2 },
          },
          0
        )
        .to(
          ref3.current,
          {
            duration: DURATION,
            attr: { y1: Y2, y2: Y2 },
          },
          0
        )
        // .to(
        //   ref2.current,
        //   {
        //     duration: DURATION,
        //     opacity: 0,
        //   },
        //   0
        // )
        .to(
          ref1.current,
          {
            duration: DURATION,
            rotate: 45,
            transformOrigin: "50% 50%",
          },
          DURATION
        )
        .to(
          ref3.current,
          {
            duration: DURATION,
            rotate: -45,
            transformOrigin: "50% 50%",
          },
          DURATION
        )
    } else {
      // @ts-ignore
      gsap
        .timeline()
        .to(
          ref1.current,
          {
            duration: DURATION,
            rotate: 0,
            transformOrigin: "50% 50%",
          },
          0
        )
        .to(
          ref3.current,
          {
            duration: DURATION,
            rotate: 0,
            transformOrigin: "50% 50%",
          },
          0
        )
        // .to(
        //   ref2.current,
        //   {
        //     duration: DURATION,
        //     opacity: 1,
        //   },
        //   0
        // )
        .to(
          ref1.current,
          {
            duration: DURATION,
            attr: { y1: Y1, y2: Y1 },
          },
          DURATION
        )
        .to(
          ref3.current,
          {
            duration: DURATION,
            attr: { y1: Y3, y2: Y3 },
          },
          DURATION
        )
    }
  }, [showMenu])

  // function onMouseEnter() {
  //   setHover(true)
  // }

  // function onMouseLeave() {
  //   setHover(false)
  // }

  // function onFocus() {
  //   setFocus(true)
  // }

  // function onBlur() {
  //   setFocus(false)
  // }

  return (
    <BaseButton
      onClick={onClick}
      className={cn(
        "trans-300 transition-color relative -ml-4 flex shrink-0 grow-0 flex-row items-center justify-center p-4",
        [
          headerMode === "dark",
          "stroke-white",
          "stroke-slate-400 hover:stroke-slate-900",
        ],
        className
      )}
      style={style}
      ariaLabel={showMenu ? "Close Menu" : "Open Menu"}
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      // onFocus={onFocus}
      // onBlur={onBlur}
    >
      {/* <span ref={refl1} className={cn(cls, "top-7")} style={style} />
      <span ref={refl3} className={cn(cls, "top-9")} style={style} /> */}

      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
      >
        <line
          ref={ref1}
          x1={X1}
          y1={Y1}
          x2={X2}
          y2={Y1}
          shape-rendering="crispEdges"
        />
        {/* <line ref={ref2} x1={X1} y1={Y2} x2={X2} y2={Y2} className={cls} /> */}
        <line
          ref={ref3}
          x1={X1}
          y1={Y3}
          x2={X2}
          y2={Y3}
          shape-rendering="crispEdges"
        />
      </svg>
    </BaseButton>
  )
}
