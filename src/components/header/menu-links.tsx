import IClassProps from "../../interfaces/class-props"
import type ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import { HEADER_LINKS } from "../../menus"
import MenuLink from "./menu-link"

interface IProps extends IClassProps {
  title: string
  headerMode?: string
  tab?: string
  onClick: any
}

function MenuLinks({
  title,
  headerMode = "light",
  tab = "",
  onClick,
  className,
  style,
}: IProps) {
  // // let ref
  // // const tMenuLinkF
  // // const tMenuLinkR
  // const isFirstRun = useRef(0)

  // useEffect(() => {
  //   //if (isFirstRun.current < 2) {
  //   // @ts-ignore
  //   gsap.timeline().from(
  //     '.menu-link',
  //     {
  //       duration: 1,
  //       opacity: 0.5,
  //       stagger: 0.1,
  //       ease: 'power3.out',
  //     },
  //     0
  //   )
  //   // .from(
  //   //   '.menu-link',
  //   //   {
  //   //     duration: 0.5,
  //   //     x: '-0.5rem',
  //   //     stagger: 0.05,
  //   //     ease: 'power3.out',
  //   //   },
  //   //   0.1
  //   // )
  //   // }
  //   //++isFirstRun.current
  // }, [])

  // useEffect(() => {
  //   if (isFirstRun.current < 2) {
  //     if (showMenu) {
  //       // @ts-ignore
  //       tMenuLinkR.current.pause()
  //       // @ts-ignore
  //       tMenuLinkF.current.restart()
  //     } else {
  //       // @ts-ignore
  //       tMenuLinkF.current.pause()
  //       // @ts-ignore
  //       tMenuLinkR.current.restart()
  //     }
  //   }

  //   ++isFirstRun.current
  // }, [showMenu])

  return (
    <ul
      className={cn(
        "flex flex-col border-t border-slate-200 px-4  pt-2 font-semibold",
        [headerMode === "dark", "bg-slate-800"],
        className
      )}
      style={style}
    >
      {HEADER_LINKS.map((link: ILink, index: number) => {
        const selected = title == link.name || tab == link.name

        return (
          <li key={index}>
            <MenuLink
              link={link}
              selected={selected}
              onClick={onClick}
              key={index}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default MenuLinks
