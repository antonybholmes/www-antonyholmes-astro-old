import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BaseLink from "../link/base-link"
import BasePostImage from "./base-post-image"
import IImageProps from "../../interfaces/image-props"

interface IProps extends IPostProps, IImageProps {}

const PostImage = ({
  post,
  size = [800, 400],
  loading = "lazy",
  className,
}: IProps) => {
  const image = (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <BasePostImage
        post={post}
        size={size}
        loading={loading}
        className="absolute transition-transform duration-300 hover:scale-104"
      />
    </div>
  )

  if (post.fields.slug) {
    return (
      <BaseLink href={post.fields.slug} ariaLabel={post.frontmatter.title}>
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}

export default PostImage
