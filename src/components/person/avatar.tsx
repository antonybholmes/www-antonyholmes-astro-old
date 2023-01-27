import IClassProps from "../../interfaces/class-props"
import cn from "../../lib/class-names"
import { getAuthorBaseUrl } from "../../lib/urls"
import BaseCol from "../base-col"
import BaseLink from "../link/base-link"
import VCenterRow from "../v-center-row"
import AvatarImage from "./avatar-image"

interface IProps extends IClassProps {
  person: string
  showTitle?: boolean
  isSmall?: boolean
}

export default function Avatar({ person, isSmall = false, className }: IProps) {
  const href = getAuthorBaseUrl(person)

  return (
    <VCenterRow className={cn("gap-x-3", className)}>
      <BaseLink href={href} ariaLabel={`Click to read more about ${person}`}>
        <AvatarImage
          person={person}
          className={cn([isSmall, "h-10 w-10", "h-12 w-12"])}
        />
      </BaseLink>
      <BaseCol>
        <BaseLink
          href={href}
          ariaLabel={`Click to read more information about ${person}`}
          underline={true}
          className={cn("font-bold", [isSmall, "text-sm"])}
        >
          {person}
        </BaseLink>
      </BaseCol>
    </VCenterRow>
  )
}
