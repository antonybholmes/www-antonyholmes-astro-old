import IClassProps from "../../interfaces/class-props"
import IImageSizeProps from "../../interfaces/image-size-props"
import IPlaceholderProps from "../../interfaces/placeholder-props"
import cn from "../../lib/class-names"
import { getUrlFriendlyTag } from "../../lib/tags"
import PlaceholderImage from "../placeholder-image"

export interface IAvatarProps extends IClassProps, IPlaceholderProps {
  person: string
}

interface IProps extends IAvatarProps, IImageSizeProps {}

export default function AvatarImage({
  person,
  size = [160, 160],
  loading = "lazy",
  className,
  containerClassName,
  imgClassName,
}: IProps) {
  return (
    <PlaceholderImage
      src={`/assets/images/people/${getUrlFriendlyTag(person)}.webp`}
      alt={`Picture of ${person}`}
      size={size}
      loading={loading}
      className={cn("rounded-full", className)}
      containerClassName={containerClassName}
      imgClassName={imgClassName}
    />
  )
}
