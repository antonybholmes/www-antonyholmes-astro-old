import IChildrenProps from "../../interfaces/children-props"
import cn from "../../lib/class-names"
import { IHtmlProps } from "../html"
import MarkdownBody from "../markdown-body"

export default function PostBody({ className, children }: IChildrenProps) {
  return (
    <MarkdownBody className={cn("post", className)}>{children}</MarkdownBody>
  )
}
