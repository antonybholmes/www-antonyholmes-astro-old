import type IChildProps from "../interfaces/child-props"
import cn from "../lib/class-names"
import HCenterRow from "./h-center-row"

export default function ContentDiv({
  className,
  style,
  children,
}: IChildProps) {
  return (
    <HCenterRow
      className={cn("grid grid-cols-1 lg:grid-cols-10 px-5 lg:px-0", className)}
      style={style}
    >
      <div className="col-span-1">{children[0]}</div>
      <div className="col-span-1 lg:col-span-8">{children[1]}</div>
      <div className="col-span-1">{children[2]}</div>
    </HCenterRow>
  )
}
