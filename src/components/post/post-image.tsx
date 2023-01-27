import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import cn from "../../lib/class-names"
import { getPostBaseUrl } from "../../lib/urls"
import BaseLink from "../link/base-link"
import BasePostImage from "./base-post-image"

interface IProps extends IPostProps, IImageSizeProps {}

export default function PostImage({
  post,
  size = [800, 400],
  loading = "lazy",
  className,
}: IProps) {
  const image = (
    <BasePostImage
      post={post}
      size={size}
      loading={loading}
      className={cn("rounded-xl", className)}
      imgClassName="scale-102 hover:scale-105"
    />
  )

  if (post.slug) {
    return (
      <BaseLink href={getPostBaseUrl(post.slug)} ariaLabel={post.data.title}>
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}
