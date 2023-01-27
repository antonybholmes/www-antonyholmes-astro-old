import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import PlaceholderImage, { IPlaceholderProps } from "../placeholder-image"

interface IProps extends IPostProps, IImageSizeProps, IPlaceholderProps {}

export default function BasePostImage({
  post,
  size = [1600, 800],
  loading = "lazy",
  containerClassName,
  imgClassName,
  className,
  children,
}: IProps) {
  return (
    <PlaceholderImage
      src={`/assets/images/posts/${post.data.hero}.webp`}
      alt={post.data.title}
      size={size}
      loading={loading}
      className={className}
      containerClassName={containerClassName}
      imgClassName={imgClassName}
    >
      {children}
    </PlaceholderImage>
  )
}
