import { useState } from "preact/hooks"
import useScrollListener from "../hooks/use-scroll-listener"
import BreadcrumbChevronIcon from "../icons/breadcrumb-chevron"
import HomeIcon from "../icons/home"
import type IClassProps from "../interfaces/class-props"
import type ICrumbProps from "../interfaces/crumb-props"
import cn from "../lib/class-names"
import ContentDiv from "./content-div"
import BaseLink from "./link/base-link"

const EXCLUDE = ["Tag", "Section", "Page"]

interface BreadcrumbProps extends IClassProps, ICrumbProps {
  headerMode?: string
}

export default function Breadcrumb({
  crumbs,
  headerMode = "light",
  className = "",
}: BreadcrumbProps) {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useScrollListener(handleScroll)

  if (!crumbs) {
    return <></>
  }

  const ret: any[] = []

  ret.push(
    <li key="home">
      <BaseLink href="/" ariaLabel="Home">
        <HomeIcon className="trans-300 transition-color w-4 fill-blue-600 hover:fill-slate-900 dark:fill-slate-400 dark:hover:fill-white" />
      </BaseLink>
      {/* <ToBlueLink href="/" ariaLabel="Home">
        Home
      </ToBlueLink> */}
    </li>
  )

  // ret.push(<li key={`crumb-${ret.length}`}>{getCrumbLink(["Home", "/"], mode)}</li>)

  for (let i = 0; i < crumbs.length; ++i) {
    const crumb = crumbs[i]

    ret.push(
      <li key={`divider-${i}`} className="group flex flex-row gap-x-2">
        <BreadcrumbChevronIcon className="trans-300 transition-color w-4 stroke-slate-400 group-hover:translate-x-0.5 group-hover:stroke-slate-900 dark:group-hover:stroke-white" />
        <BaseLink
          href={crumb[1]}
          ariaLabel={`Visit ${crumb[0]}`}
          className="trans-300 transition-color text-blue-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white"
        >
          {crumb[0]}
        </BaseLink>
      </li>
    )
  }

  return (
    <ContentDiv
      className={cn(
        "sticky top-0 z-50 bg-white/70 backdrop-blur py-4 border-b trans-300 transition-color",
        [
          scrollY > 10,
          [headerMode === "light", "border-slate-300"],
          "border-transparent",
        ]
      )}
    >
      <></>
      <ul
        className={cn(
          "flex flex-row flex-nowrap items-center gap-x-2 text-sm font-semibold",
          className
        )}
      >
        {ret}
      </ul>
      <></>
    </ContentDiv>
  )
}
