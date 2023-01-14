import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import PlaceholderImage from "../placeholder-image"

interface IProps extends IPostProps, IImageSizeProps {
  duration: number
  imgClassName?: string
}

const BasePostImage = ({
  post,
  size = [1600, 800],
  loading = "lazy",
  duration = 0.4,
  imgClassName,
  className,
}: IProps) => (
  <PlaceholderImage
    src={`/assets/images/posts/${post.frontmatter.hero}.webp`}
    alt={post.frontmatter.title}
    size={size}
    loading={loading}
    duration={duration}
    className={className}
    imgClassName={cn("object-cover", imgClassName)}
  />
)

export default BasePostImage
