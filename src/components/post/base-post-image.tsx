import cn from "../../lib/class-names"
import IPostProps from "../../interfaces/post-props"
import BaseImage from "../base-image"
import IImageProps from "../../interfaces/image-props"

interface IProps extends IPostProps, IImageProps {}

const BasePostImage = ({
  post,
  size = [1600, 800],
  loading = "lazy",
  className,
}: IProps) => (
  <BaseImage
    src={`/images/posts/${post.frontmatter.hero}.webp`}
    alt={post.frontmatter.title}
    size={size}
    loading={loading}
    className={cn("h-full w-full object-cover", className)}
  />
)

export default BasePostImage
