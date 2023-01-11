import { gsap } from "gsap"
import { useRef, useEffect } from "preact/hooks"
import { ANIMATION_DURATION_MS } from "../../constants"
import LogoIcon from "../../icons/logo-icon-com"
import cn from "../../lib/class-names"
import HCenterRow from "../h-center-row"
import BaseLink from "../link/base-link"
import IHeaderProps from "./header-props"
import MenuOpenButton from "./menu-button-open"
import MenuLinks from "./menu-links"

export interface IMenuOverlayProps extends IHeaderProps {
  showMenu: boolean
  onClick: any
}

export default function MenuOverlay({
  title,
  tab,
  showMenu,
  onClick,
}: IMenuOverlayProps) {
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  useEffect(() => {
    if (showMenu) {
      // @ts-ignore
      gsap
        .timeline()
        .from(
          ref1.current,
          {
            duration: ANIMATION_DURATION_MS,
            opacity: 0,
          },
          0
        )
        .from(
          ref1.current,
          {
            x: "-2rem",
            duration: ANIMATION_DURATION_MS,
          },
          0
        )
    }
  }, [showMenu])

  // useEffect(() => {
  //   if (!isFirstRun.current) {
  //     if (showMenu) {
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
  // }, [showMenu])

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-100 flex h-screen w-full flex-row bg-black/50 backdrop-blur-sm"
      )}
    >
      <div ref={ref1} className=" h-full w-3/4 bg-white py-2">
        {/* <MenuOpenButton showMenu={showMenu} onClick={onClick} />

        <div className="mt-2 mr-2 w-full">
          <MenuLinks title={title} tab={tab} onClick={onClick} />
        </div> */}
        <BaseLink href="/">
          <LogoIcon className="mx-8 mt-1 mb-4" />
        </BaseLink>
        <MenuLinks title={title} tab={tab} onClick={onClick} />
      </div>
      <div ref={ref2} onClick={onClick} className="h-full">
        <HCenterRow>
          <MenuOpenButton
            showMenu={showMenu}
            onClick={onClick}
            headerMode="dark"
          />
        </HCenterRow>
      </div>
    </div>
  )
}
