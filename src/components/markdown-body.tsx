import IChildrenProps from "../interfaces/children-props"
import cn from "../lib/class-names"

export default function MarkdownBody({ className, children }: IChildrenProps) {
  return <div className={cn("markdown", className)}>{children}</div>
}
