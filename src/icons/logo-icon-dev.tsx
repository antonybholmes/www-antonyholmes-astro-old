import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function LogoIcon({ headerMode = "light", className }: IProps) {
  const textClass = cn("transition-ani transition-color", [
    headerMode === "light",
    "fill-sky-600 group-hover:fill-sky-500",
    "fill-slate-300 group-hover:fill-slate-200",
  ])

  return (
    <svg
      viewBox="0 0 62 24"
      xmlns="http://www.w3.org/2000/svg"
      class={cn("group h-9 border font-bold", className)}
    >
      <rect
        width="24"
        height="24"
        class={cn("transition-ani transition-color", [
          headerMode === "light",
          "  fill-sky-600 text-white group-hover:fill-sky-500",
          "fill-slate-300 group-hover:fill-slate-200",
        ])}
      />
      <text
        alignment-baseline="middle"
        text-anchor="middle"
        x="12"
        y="14"
        class={cn("transition-ani transition-color", [
          headerMode === "light",
          "fill-white",
          "fill-slate-900",
        ])}
      >
        ah
      </text>
      <text
        alignment-baseline="middle"
        textAnchor="middle"
        x="28"
        y="14"
        class={textClass}
      >
        .
      </text>
      <text alignment-baseline="middle" x="21" y="14" class={textClass}>
        dev
      </text>
    </svg>
  )
}
