import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function SmallLogoIcon({
  headerMode = "light",
  className,
  style,
}: IProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      class={cn("group w-12 h-12 font-semibold", className)}
      style={style}
    >
      <rect
        width="40"
        height="40"
        class={cn("trans-300 transition-color text-white", [
          headerMode === "dark",
          "fill-white/20",
          ["fill-blue-600", [headerMode === "light", "dark:fill-white/20"]],
        ])}
      />
      <text
        alignment-baseline="middle"
        text-anchor="middle"
        x="20"
        y="21"
        class="fill-white"
      >
        ah
      </text>
    </svg>
  )
}
