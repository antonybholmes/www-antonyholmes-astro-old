import ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"
import VCenterCol from "../v-center-col"

//const DURATION = 0.5
const BAR_WIDTH = "3px"

export const LINK_CLS = cn(
  "relative",
  "font-semibold",
  "text-sm",
  "h-11",
  "justify-center",
  "whitespace-nowrap",
  "trans-300",
  "transition-colors",
  "whitespace-nowrap"
)

export const LIGHT_CLS = cn(
  "text-slate-500",
  "hover:bg-white",
  "hover:text-slate-900",
  "active:text-blue-500",
  "dark:text-white/60",
  "dark:hover:bg-transparent",
  "dark:hover:text-white",
  "dark:active:bg-white/20"
)

interface IProps {
  link: ILink
  selected: boolean
  scrollY: number
  headerMode?: string
}

export default function HeaderLink({
  link,
  selected,
  scrollY,
  headerMode = "light",
}: IProps) {
  // const ref = useRef(null)
  // const [hover, setHover] = useState(false)
  //const [down, setDown] = useState(false)

  // const isFirstRun = useRef(true)
  // const t1 = useRef(null)
  // const t2 = useRef(null)

  // useEffect(() => {
  //   // @ts-ignore
  //   t1.current = gsap
  //     .timeline({ paused: true })
  //     .to(
  //       ref.current,
  //       {
  //         x: "-100%",
  //         width: "100%",
  //         duration: 0,
  //       },
  //       0
  //     )
  //     .to(
  //       ref.current,
  //       {
  //         x: 0,
  //         duration: DURATION,
  //         ease: "power3.out",
  //       },
  //       0
  //     )
  //     .to(
  //       ref.current,
  //       {
  //         x: 10,
  //         duration: DURATION,
  //         ease: "power3.out",
  //       },
  //       0.2
  //     )

  //     .to(
  //       ref.current,
  //       {
  //         x: 0,
  //         duration: DURATION,
  //         ease: "power3.out",
  //       },
  //       0.4
  //     )
  //     .to(
  //       ref.current,
  //       {
  //         width: "95%",
  //         duration: DURATION,
  //         ease: "power3.out",
  //       },
  //       0.5
  //     )
  //     .to(
  //       ref.current,
  //       {
  //         width: "100%",
  //         duration: DURATION,
  //         ease: "power3.out",
  //       },
  //       0.7
  //     )

  //   // @ts-ignore
  //   t2.current = gsap.timeline({ paused: true }).to(
  //     ref.current,
  //     {
  //       x: "110%",
  //       duration: DURATION,
  //       ease: "power3.out",
  //     },
  //     0
  //   )
  // }, [])

  // useEffect(() => {
  //   if (!isFirstRun.current) {
  //     if (hover) {
  //       // @ts-ignore
  //       t2.current.pause()
  //       // @ts-ignore
  //       t1.current.restart()
  //     } else {
  //       // @ts-ignore
  //       t1.current.pause()
  //       // @ts-ignore
  //       t2.current.restart()
  //     }
  //   }

  //   isFirstRun.current = false
  // }, [hover])

  return (
    <BaseLink
      href={link.url}
      ariaLabel={`View ${link.name}`}
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      // onMouseDown={() => setDown(true)}
      // onMouseUp={() => setDown(false)}
    >
      <VCenterCol
        className={cn(LINK_CLS, [
          selected,
          [
            headerMode === "dark",
            "text-slate-50",
            "text-blue-600 dark:text-white",
          ],
          [
            headerMode === "dark",
            "text-white/60 hover:border-white/20 hover:text-white active:bg-white/20",
            LIGHT_CLS,
          ],
        ])}
      >
        {link.name}

        <div
          className={cn(
            "trans-300 absolute bottom-0 w-full",

            [
              selected,
              [headerMode === "light", "bg-blue-600", "bg-transparent"],
            ]
          )}
          style={{ height: BAR_WIDTH }}
        />
      </VCenterCol>
    </BaseLink>
  )
}
