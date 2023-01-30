import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import { getAuthorBaseUrl } from "../../lib/urls"
import CondComp from "../component"
import BaseLink from "../link/base-link"
import VCenterRow from "../v-center-row"
import AvatarImage from "./avatar-image"

interface IProps extends IClassProps {
  people: string[]
  showImages?: boolean
}

export default function CompactAvatars({
  people,
  showImages = true,
  className,
}: IProps) {
  return (
    <VCenterRow className="gap-x-3">
      <CondComp cond={showImages}>
        <ul
          className={cn("relative h-12", className)}
          style={{ width: `${3 + (people.length - 1) * 0.5}rem` }}
        >
          {people.map((person, index) => (
            <li key={index}>
              <BaseLink
                href={getAuthorBaseUrl(person)}
                ariaLabel={`Click to read more about ${person}`}
                className={cn("absolute block rounded-full", `ml-${index * 2}`)}
              >
                <AvatarImage person={person} className="h-12 w-12" />
              </BaseLink>
            </li>
          ))}
        </ul>
      </CondComp>

      <ul className="flex flex-row flex-wrap items-center gap-x-1 text-sm font-semibold">
        {people.map((person, index) => (
          <li key={index}>
            <BaseLink
              href={getAuthorBaseUrl(person)}
              ariaLabel={`Click to read more about ${person}`}
              underline={true}
            >
              {person}
            </BaseLink>
            {index < people.length - 2 ? <span>,</span> : <></>}
            {index === people.length - 2 ? (
              <span className="ml-1">&</span>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </VCenterRow>
  )
}
