import cn from "../lib/class-names"
import IClassProps from "../interfaces/class-props"
import IPostAuthor from "../interfaces/post-author"
import AvatarImage from "./avatar-image"
import BaseCol from "./base-col"
import BaseLink from "./link/base-link"
import VCenterRow from "./v-center-row"
import { getAuthorUrl } from "../lib/api/author"

interface IProps extends IClassProps {
  author: IPostAuthor
  showTitle?: boolean
  isSmall?: boolean
}

const Avatar = ({
  author,
  showTitle = false,
  isSmall = false,
  className,
}: IProps) => {
  const href = getAuthorUrl(author)

  return (
    <VCenterRow className={cn("gap-x-3", className)}>
      <BaseLink
        href={href}
        ariaLabel={`Click to read more about ${author.frontmatter.name}`}
        className={cn("block", [isSmall, "h-10 w-10", "h-12 w-12"])}
      >
        <AvatarImage author={author} />
      </BaseLink>
      <BaseCol>
        <BaseLink
          href={href}
          ariaLabel={`Click to read more information about ${author.frontmatter.name}`}
          underline={true}
          className={cn("font-bold", [isSmall, "text-sm"])}
        >
          {author.frontmatter.name}
        </BaseLink>

        {showTitle && (
          <div className="text-sm font-light text-slate-500">
            {author.frontmatter.title.split(",")[0].trim()}
          </div>
        )}
      </BaseCol>
    </VCenterRow>
  )
}

export default Avatar
