import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import { getPostBaseUrl } from "../../lib/urls"
import ToBlueLink from "../link/to-blue-link"

const PostTitleLink = ({ post, className }: IPostProps) => (
  <h2 className={cn("font-bold capitalize", className)}>
    <ToBlueLink href={getPostBaseUrl(post.slug)} ariaLabel={post.data.title}>
      {post.data.title}
    </ToBlueLink>
  </h2>
)

export default PostTitleLink
