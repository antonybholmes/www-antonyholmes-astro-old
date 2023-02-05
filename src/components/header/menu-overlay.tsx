import SmallLogoIcon from "../../icons/logo-icon-small"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"
import VCenterRow from "../v-center-row"
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
  // const overlayRef = useRef(null)
  // const sideMenuRef = useRef(null)

  // useEffect(() => {
  //   if (showMenu) {
  //     gsap
  //       .timeline()
  //       .set(overlayRef.current, {
  //         visibility: "visible",
  //       })
  //       .to(
  //         overlayRef.current,
  //         {
  //           duration: ANIMATION_DURATION_S,
  //           opacity: 1,
  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //       .to(
  //         sideMenuRef.current,
  //         {
  //           duration: ANIMATION_DURATION_S,
  //           opacity: 1,
  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //       .to(
  //         sideMenuRef.current,
  //         {
  //           x: 0,
  //           duration: ANIMATION_DURATION_S,
  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //   } else {
  //     gsap
  //       .timeline()
  //       .to(
  //         overlayRef.current,
  //         {
  //           duration: ANIMATION_DURATION_S,
  //           opacity: 0,
  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //       .to(
  //         overlayRef.current,
  //         {
  //           duration: ANIMATION_DURATION_S,
  //           opacity: 0,
  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //       .to(
  //         sideMenuRef.current,
  //         {
  //           duration: ANIMATION_DURATION_S,
  //           opacity: 0,
  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //       .to(
  //         sideMenuRef.current,
  //         {
  //           x: "-4rem",
  //           duration: ANIMATION_DURATION_S,
  //           ease: Power3.easeOut,
  //         },
  //         0
  //       )
  //       .set(overlayRef.current, {
  //         visibility: "hidden",
  //       })
  //   }
  // }, [showMenu])

  return (
    <div
      //ref={overlayRef}
      className={cn(
        "fixed left-0 top-0 z-100 flex h-screen w-full flex-row overflow-hidden bg-black/70 backdrop-blur-sm",
        [
          showMenu,
          "overlay-show visible opacity-100",
          "overlay-hide invisible opacity-0",
        ]
      )}
    >
      <div
        //ref={sideMenuRef}
        className={cn("trans-300 transition-translation h-full w-72 bg-white", [
          showMenu,
          "ml-0",
          "-ml-8",
        ])}
      >
        <VCenterRow className="px-5 py-2">
          <MenuOpenButton showMenu={showMenu} onClick={onClick} />
          <div>
            <BaseLink href="/">
              <SmallLogoIcon className="shrink-0" headerMode="light-only" />
            </BaseLink>
          </div>
        </VCenterRow>
        <MenuLinks title={title} tab={tab} onClick={onClick} className="grow" />
      </div>
      <div onClick={onClick} className="h-full grow">
        {/* <HCenterRow>
          <MenuOpenButton
            showMenu={showMenu}
            onClick={onClick}
            headerMode="dark"
          />
        </HCenterRow>  */}
      </div>
    </div>
  )
}
