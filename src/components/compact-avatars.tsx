import cn from "../lib/class-names"

import IClassProps from "../interfaces/class-props"
import IPostAuthor from "../interfaces/post-author"
import AvatarImage from "./avatar-image"
import BaseLink from "./link/base-link"
import VCenterRow from "./v-center-row"
import { getAuthorUrl } from "../lib/api/author"

interface IProps extends IClassProps {
  authors: IPostAuthor[]
  showImages?: boolean
}

const CompactAvatars = ({ authors, showImages = true, className }: IProps) => (
  <VCenterRow className="gap-x-3">
    {showImages && (
      <ul
        className="relative h-12"
        style={{ width: `${3 + (authors.length - 1) * 0.5}rem` }}
      >
        {authors.map((author, index) => (
          <li>
            <BaseLink
              href={getAuthorUrl(author)}
              ariaLabel={`View more posts by ${author}`}
            >
              <AvatarImage
                author={author}
                className={cn(
                  "absolute h-12 w-12 border border-white",
                  `ml-${index * 2}`
                )}
                key={index}
              />
            </BaseLink>
          </li>
        ))}
      </ul>
    )}

    <ul className="flex flex-row flex-wrap items-center gap-x-1 text-sm font-bold">
      {authors.map((author, index) => (
        <li key={index}>
          <BaseLink
            href={getAuthorUrl(author)}
            ariaLabel={`Click to read more information about ${author.frontmatter.name}`}
            underline={true}
          >
            {author.frontmatter.name}
          </BaseLink>
          {index < authors.length - 2 && <span>,</span>}
          {index === authors.length - 2 && <span className="ml-1">&</span>}
        </li>
      ))}
    </ul>
  </VCenterRow>
)

export default CompactAvatars
