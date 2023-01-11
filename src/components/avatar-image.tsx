import IClassProps from "../interfaces/class-props"
import IImageSizeProps from "../interfaces/image-size-props"
import IPostAuthor from "../interfaces/post-author"
import cn from "../lib/class-names"
import { getUrlFriendlyTag } from "../lib/tags"
import BaseImage from "./base-image"

export interface IAvatarProps extends IClassProps {
  author: IPostAuthor
}

interface IProps extends IAvatarProps, IImageSizeProps {}

const AvatarImage = ({ author, size = [160, 160], className }: IProps) => {
  return (
    <BaseImage
      src={`/images/people/${getUrlFriendlyTag(author.frontmatter.name)}.webp`}
      alt={`Picture of ${author.frontmatter.name}`}
      size={size}
      className={cn("rounded-full", className)}
    />
  )
}

export default AvatarImage
