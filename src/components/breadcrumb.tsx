import BreadcrumbChevronIcon from "../icons/breadcrumb-chevron"
import HomeIcon from "../icons/home"
import type IClassProps from "../interfaces/class-props"
import type ICrumbProps from "../interfaces/crumb-props"
import cn from "../lib/class-names"
import BaseLink from "./link/base-link"
import ToBlackLink from "./link/to-black-link"
import VCenterRow from "./v-center-row"

const EXCLUDE = ["Tag", "Section", "Page"]

interface BreadcrumbProps extends IClassProps, ICrumbProps {}

export default function Breadcrumb({
  crumbs,
  className = "",
}: BreadcrumbProps) {
  if (!crumbs) {
    return <></>
  }

  const ret: any[] = []

  ret.push(
    <li key="home">
      <BaseLink href="/" ariaLabel="Home">
        <HomeIcon className="trans-300 transition-color w-4 fill-blue-600 hover:fill-slate-900 dark:fill-slate-500 dark:hover:fill-white" />
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
        <BreadcrumbChevronIcon className="trans-300 transition-color w-4 stroke-slate-400 group-hover:translate-x-0.5 group-hover:stroke-slate-900 dark:stroke-slate-500 dark:group-hover:stroke-white" />
        <BaseLink
          href={crumb[1]}
          ariaLabel={`Visit ${crumb[0]}`}
          className="trans-300 transition-color text-blue-600 group-hover:text-slate-900 dark:text-slate-500 dark:group-hover:text-white"
        >
          {crumb[0]}
        </BaseLink>
      </li>
    )
  }

  return (
    <VCenterRow>
      <ul
        className={cn(
          "flex flex-row flex-nowrap items-center gap-x-2 text-sm font-semibold",
          className
        )}
      >
        {ret}
      </ul>
    </VCenterRow>
  )
}
