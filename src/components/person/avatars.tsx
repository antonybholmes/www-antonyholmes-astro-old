import cn from "../../lib/class-names"
import IClassProps from "../../interfaces/class-props"
import IPostAuthor from "../../interfaces/post-author"
import Avatar from "../person/avatar"
import WrapRow from "../wrap-row"

interface IProps extends IClassProps {
  authors: IPostAuthor[]
  showTitle?: boolean
  isSmall?: boolean
}

export default function Avatars({
  authors,
  showTitle = false,
  isSmall = false,
  className,
}: IProps) {
  return (
    <WrapRow className={cn("gap-4", className)}>
      {authors.map((author, index) => (
        <Avatar author={author} isSmall={isSmall} key={index} />
      ))}
    </WrapRow>
  )
}