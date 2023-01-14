import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function LogoIcon({
  headerMode = "light",
  className,
  style,
}: IProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class={cn("group w-15 font-bold", className)}
      style={style}
    >
      <rect
        width="48"
        height="48"
        class={cn("trans-300 transition-color", [
          headerMode === "dark",
          "fill-slate-600",
          "fill-sky-600 text-white group-hover:fill-sky-500",
        ])}
      />
      <text
        alignment-baseline="middle"
        text-anchor="middle"
        x="24"
        y="26"
        class="fill-white"
      >
        ah
      </text>
    </svg>
  )
}
