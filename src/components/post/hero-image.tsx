import IImageSizeProps from "../../interfaces/image-size-props"
import IPostProps from "../../interfaces/post-props"
import BasePostImage from "./base-post-image"
import HeroImageCaption from "./hero-image-caption"

interface IProps extends IPostProps, IImageSizeProps {}

export default function HeroImage({
  post,
  size = [1600, 800],
  className,
}: IProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <BasePostImage
        post={post}
        size={size}
        className={className}
        imgClassName={className}
      />
      {post.data.heroCaption && (
        <HeroImageCaption
          post={post}
          className="trans-700 opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </div>
  )
}
