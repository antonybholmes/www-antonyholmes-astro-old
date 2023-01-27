import cn from "../../lib/class-names"
import AvatarImage, { IAvatarProps } from "./avatar-image"

export default function AvatarImageLarge({
  person,
  className,
  containerClassName,
  imgClassName,
}: IAvatarProps) {
  return (
    <AvatarImage
      person={person}
      size={[640, 640]}
      className={className}
      containerClassName={containerClassName}
      imgClassName={cn("scale-102 hover:scale-105", imgClassName)}
      loading="eager"
    />
  )
}
